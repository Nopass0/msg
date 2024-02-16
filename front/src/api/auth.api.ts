import axios from "axios";
import { getApiUrl } from "./base.api";

export const yandexLoginAPI = async (code: string) => {
  const formData = new FormData();
  formData.append("code", code);
  try {
    const response = await axios.post(getApiUrl("yandex_login"), {
      code: code,
    });
    return response;
  } catch (error) {
    console.error("Error during Yandex login:", error);
    return { status: "error" };
  }
};
