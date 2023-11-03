"use client";

import React, { useState, useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

import Btn from "@/components/btns/Btn";
import UserIcon from "public/icons/user.svg";

export default function UserBar() {
  const node = useRef();
  const buttonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);

  useOutsideClick([node, buttonRef], () => {
    setIsOpen(false);
  })

  return (
    <React.Fragment>
      <Btn
        className="ml-3xs hidden hover:text-header 430px:flex "
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setIsOpen(!isOpen);
        }}
      >
        <UserIcon />
      </Btn>

      <div
        className={`fixed right-0 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-20  max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))] max-w-[calc(100%-theme(spacing.2xs))] flex-col rounded-bl-[2rem] bg-bar p-sm shadow
        ${
          isOpen
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
