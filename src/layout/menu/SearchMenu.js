"use client";

import React, { useState, useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

import Btn from "@/components/btns/Btn";
import SearchBar from "@/components/btns/SearchBar";
import SearchIcon from "public/icons/search.svg";
import DeleteIcon from "public/icons/x.svg";

export default function SearchMenu() {
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
        className="ml-3xs hidden hover:text-header  330px:flex"
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setIsOpen(!isOpen);
        }}
      >
        <SearchIcon />
      </Btn>

      <div
        className={`fixed left-1/2 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-[21] max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))] w-[calc(100%-theme(spacing.xs))]  max-w-[calc(theme(screens.xl)+theme(spacing.sm))] -translate-x-1/2 self-center rounded-b-[2rem] bg-bar p-sm  shadow 330px:fixed
        ${
          isOpen
            ? "slide-in-top  flex"
            : wasOpened
            ? "slide-in-top 330px:slide-out-top flex"
            : "slide-in-top  flex 330px:hidden"
        } `}
        ref={node}
      >
        <SearchBar />
      </div>
    </React.Fragment>
  );
}
