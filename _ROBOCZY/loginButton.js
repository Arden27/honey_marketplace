"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "@/redux/store";
import { logoutUser } from "./api";

function LoginButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleLoginLogout = async () => {
    if (isLoggedIn) {
      try {
        await logoutUser();
      } catch (error) {
        console.log(error);
      } finally {
        localStorage.removeItem("token");
        //dispatch(resetStore());
        dispatch(setIsLoggedIn(false));
        //navigate('/login');
      }
    }
    //dispatch(setIsLoggedIn(!isLoggedIn));
  };

  return (
    <button onClick={handleLoginLogout}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default LoginButton;
