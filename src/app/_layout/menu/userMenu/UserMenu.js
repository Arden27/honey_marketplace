"use client";

import React, { useState, useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useSelector, useDispatch } from "react-redux";
import { closeUserMenu, openUserMenu } from "@/redux/store";

import Button from "@/components/Button";
import UserIcon from "public/icons/user.svg";

export default function UserBar() {
  const node = useRef();
  const buttonRef = useRef();
  const isUserMenuOpen = useSelector((state) => state.isUserMenuOpen);
  const [wasOpened, setWasOpened] = useState(false);

  const dispatch = useDispatch();

  useOutsideClick([node, buttonRef], () => {
    dispatch(closeUserMenu());
  })

  return (
    <React.Fragment>
      <Button
        className="ml-3xs hidden hover:text-header 430px:flex "
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          isUserMenuOpen ? dispatch(closeUserMenu()) : dispatch(openUserMenu());
        }}
      >
        <UserIcon />
      </Button>

      <div
        className={`fixed right-0 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-20  max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))] max-w-[calc(100%-theme(spacing.2xs))] flex-col rounded-bl-[2rem] bg-bar p-sm shadow
        ${
          isUserMenuOpen
            ? "slide-in-right flex"
            : wasOpened
            ? "slide-out-right flex"
            : "hidden"
        } `}
        ref={node}
      >
        MENU UŻYTKOWNIKA...
      </div>
    </React.Fragment>
  );
}
