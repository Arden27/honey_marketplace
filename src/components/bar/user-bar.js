"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import UserIcon from "public/icons/user.svg";

export default function UserBar(){
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
        className="btn-sm z-30 [&>*]:hover:stroke-header"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <UserIcon className="h-[25px] w-[25px] stroke-text stroke-2 " />
      </button>

      <div
        className={` fixed right-0 top-header-sm z-10 flex max-h-[calc(100svh-theme(spacing.3xl))] w-[45rem] max-w-[100svw] flex-col rounded-l-[3rem] bg-cart-bar p-gap shadow md:top-header-lg md:max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm))]
        ${open ? "slide-in-right flex" : wasOpened ? "slide-out-right flex" : "hidden"} `}
        ref={node}
      >
        MENU UŻYTKOWNIKA...
      </div>
    </React.Fragment>
  );
};
