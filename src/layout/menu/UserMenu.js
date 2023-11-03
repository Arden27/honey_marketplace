"use client";

import Btn from "@/components/btns/Btn";
import UserIcon from "public/icons/user.svg";

import React, { useState, useEffect, useRef } from "react";

export default function UserBar() {
  const node = useRef();
  const buttonRef = useRef();
  const [open, setOpen] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mouseup", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      <Btn
        className="ml-3xs hidden hover:text-header focus:text-header 430px:flex "
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <UserIcon />
      </Btn>

      <div
        className={`fixed right-0 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-20  max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))] max-w-[calc(100%-theme(spacing.2xs))] flex-col rounded-bl-[2rem] bg-bar p-sm shadow
        ${
          open
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
