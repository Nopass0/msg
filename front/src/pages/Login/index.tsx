import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Avatar, AvatarIcon } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YA_APP_ID, YA_REDIRECT_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { yandexLoginAPI } from "../../api/auth.api";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get("code");

  const yandex_login = () => {
    const urlParams = {
      client_id: YA_APP_ID,
      scope: "login:info login:email login:avatar login:phone",
    };

    const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${urlParams.client_id}`;

    window.location.href = url;
  };

  if (code) {
    console.log(code);
    yandexLoginAPI(code).then((res) => {
      console.log(res.data);

      if (res.status === 200) {
        console.log("Ok", res.data);
        dispatch({ type: "setUser", payload: res.data });
        window.location.pathname = "/";
      }
    });
  }

  return (
    <div className="w-full h-[80%] flex justify-center items-center">
      <Card isBlurred className="border-none shadow-none">
        <CardHeader className="flex gap-4">
          <h1 className="text-xl">Вход в аккаунт</h1>
        </CardHeader>
        <CardBody>
          <Button
            onClick={yandex_login}
            className="flex bg-white border border-[#eee] rounded-[10px] dark:bg-black dark:border-[#222222] items-center text-center gap-3"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" fill="%23FC3F1D" />
              <path
                d="M24.7407 33.9778H29.0889V9.04443H22.7592C16.3929 9.04443 13.0538 12.303 13.0538 17.1176C13.0538 21.2731 15.2187 23.6163 19.0532 26.1609L21.3832 27.6987L18.3927 25.1907L12.4667 33.9778H17.1818L23.5115 24.5317L21.3098 23.0671C18.6496 21.2731 17.3469 19.8818 17.3469 16.8613C17.3469 14.2068 19.2183 12.4128 22.7776 12.4128H24.7223V33.9778H24.7407Z"
                fill="#C20E4D"
              />
            </svg>
            <p className="text-[16px] dark:text-[#f2f2f2] mr-2">
              Войти через Яндекс
            </p>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
