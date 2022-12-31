import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const roomPk = queryKey[1];
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

// npm i js-cookie
export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const githubLogIn = (code: string) =>
  instance
    .post(
      `/users/github`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

export const kakaoLogIn = (code: string) =>
  instance
    .post(
      `/users/kakao`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

export interface IEmailLoginVariables {
  username: string;
  password: string;
}

export interface IEmailLoginSuccess {
  ok: string;
}

export interface IEmailLoginError {
  error: string;
}

export const emailLogIn = ({ username, password }: IEmailLoginVariables) =>
  instance
    .post(
      `/users/log-in`,
      { username, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);
