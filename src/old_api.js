"use client";

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const API = axios.create({
  baseURL: BASE_URL,
  xsrfHeaderName: "X-CSRFTOKEN",
  xsrfCookieName: "csrftoken",
  //withCredentials: true, // used to send cookies from the client to the server in cross-origin requests.
});

// login

export const registerUser = async (username, password1, password2) => {
  const { data } = await API.post(`/dj-rest-auth/registration/`, {
    username,
    password1,
    password2,
  });
  return data;
};

export const loginUser = async (username, password) => {
  const { data } = await API.post(`/dj-rest-auth/login/`, {
    username,
    password,
  });
  return data;
};

export const logoutUser = async () => {
  const response = await API.post(`/dj-rest-auth/logout/`);
  return response;
};
