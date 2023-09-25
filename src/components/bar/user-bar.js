"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import UserIcon from "public/icons/user.svg";

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
      <button
        className="btn-icon fixed right-[calc(theme(spacing.sm)+theme(spacing.lg)+theme(spacing.xs)+theme(spacing.3xs))] hidden 515px:flex  [&>*]:hover:stroke-header [&>*]:focus:stroke-header "
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <UserIcon className="h-[25px] w-[25px]" />
      </button>

      <div
        className={`bar right-0 flex-col rounded-bl-[1.5rem] bg-cart-bar p-sm shadow
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
