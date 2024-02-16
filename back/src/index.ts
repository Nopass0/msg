import { PrismaClient } from "@prisma/client";
import { YA_APP_ID, YA_SECRET_KEY } from "./config";
import axios from "axios";
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded());
// app.use(express.multipart());

function generateRandomString(): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 64; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

app.post("/yandex_login", async (req: any, res: any) => {
  try {
    let { code } = req.body;

    if (!code) {
      return res.status(400).send("Code is required");
    }

    console.log("Code: ", code);

    const yandex_api_url = "https://oauth.yandex.ru/token";

    const params = {
      grant_type: "authorization_code",
      code: code,
      client_id: YA_APP_ID,
      client_secret: YA_SECRET_KEY,
    };

    let response;

    let formData = new FormData();
    formData.append("grant_type", "authorization_code");
    formData.append("code", code);
    formData.append("client_id", YA_APP_ID);
    formData.append("client_secret", YA_SECRET_KEY);

    try {
      response = await axios.post(yandex_api_url, formData, {
        params,
      });
    } catch (error) {
      console.error("Error requesting Yandex API", error);
      return res.status(500).send("Error requesting Yandex API");
    }

    if (!response || !response.data) {
      return res.status(400).send("Invalid response from Yandex API");
    }

    let access_token = response.data.access_token;

    if (!access_token) {
      return res.status(400).send("Access token missing");
    }

    const yandex_api_url_info = "https://login.yandex.ru/info";

    const params_info = {
      format: "json",
      oauth_token: access_token,
    };

    let response_info;

    try {
      response_info = await axios.get(yandex_api_url_info, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${access_token}`,
        },
        params: params_info,
      });
    } catch (error) {
      console.error("Error requesting Yandex API", error);
      return res.status(500).send("Error requesting Yandex user info");
    }

    if (!response_info || !response_info.data) {
      return res.status(400).send("Invalid user info from Yandex");
    }

    const user_data = response_info.data;

    if (!user_data.id || !user_data.first_name) {
      return res.status(400).send("Invalid user data from Yandex");
    }

    let user;

    try {
      user = await prisma.user.findUnique({
        where: { ya_id: Number(user_data.id) },
      });
    } catch (error) {
      console.error("Error fetching user", error);
      return res.status(500).send("Error fetching user");
    }

    if (!user) {
      const token = generateRandomString();

      let userNew;

      try {
        userNew = await prisma.user.create({
          data: {
            ya_id: Number(user_data.id),
            name: `${user_data.first_name} ${user_data.last_name}`,
            avatar: `https://avatars.yandex.net/get-yapic/${user_data.default_avatar_id}/islands-200`,
            gender: user_data?.gender || ".",
            email: user_data?.email || ".",
            tokens: {
              create: { token: token },
            },
          },
        });
      } catch (error) {
        console.error("Error creating user", error);
        return res.status(500).send("Error creating user");
      }

      console.log("New user created:", userNew);

      return res.status(200).json({
        status: "success",
        user: userNew,
        token: token,
      });
    } else {
      // Delete old tokens
      try {
        await prisma.token.deleteMany({
          where: { userId: user.id },
        });
      } catch (error) {
        console.error("Error deleting old tokens", error);
        return res.status(500).send("Error deleting old tokens");
      }

      const token = generateRandomString();

      let userUpdated;

      try {
        userUpdated = await prisma.user.update({
          where: { id: user.id },
          data: {
            tokens: {
              create: { token: token },
            },
          },
        });
      } catch (error) {
        console.error("Error updating user", error);
        return res.status(500).send("Error updating user");
      }

      console.log("User updated:", userUpdated);

      return res.status(200).json({
        status: "success[exists]",
        user: userUpdated,
        token: token,
      });
    }
  } catch (error) {
    console.error("Error handling Yandex login", error);
    return res.status(500).send("Error handling Yandex login");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
