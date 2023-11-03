"use client";

import Btn from "@/components/btns/Btn";
import SearchIcon from "public/icons/search.svg";
import DeleteIcon from "public/icons/x.svg";

import React, { useState, useEffect, useRef } from "react";

export default function SearchBar() {
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
        className="ml-3xs hidden hover:text-header focus:text-header 330px:flex"
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <SearchIcon />
      </Btn>

      <div
        className={` bar absolute left-1/2 -z-[21] w-[calc(100%-theme(spacing.xs))] max-w-[calc(theme(screens.xl)+theme(spacing.sm))] -translate-x-1/2 self-center  rounded-b-[2rem] 330px:fixed
        ${
          open
            ? "slide-in-top  flex"
            : wasOpened
            ? "slide-in-top 330px:slide-out-top flex"
            : "slide-in-top  flex 330px:hidden"
        } `}
        ref={node}
      >
        <form className="relative flex w-full ">
          <input
            type="search"
            id="search"
            placeholder="Wyszukaj..."
            className="h-[calc(theme(spacing.lg)+theme(spacing.xs))] w-full rounded-[2rem] border-2 border-solid border-text bg-transparent pl-[calc(20px+2*theme(spacing.sm))] pr-[calc(25px+2*theme(spacing.sm))] text-text placeholder:text-text placeholder:opacity-50"
          />

          <div className="absolute left-sm flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-center">
            {/* ARTEM - Tutaj chciałbym aby ikonka była lupą kiedy jeszcze nie kliknięte, a dopiero potem buttonem gdy kliknięte w input
            
            <div className="text-center opacity-50">
              <SearchIcon className="h-[20px] w-[20px] stroke-text stroke-2" />
            </div> */}
            <button
              className="flex h-md w-md items-center justify-center rounded-[2rem] opacity-50
            hover:bg-text hover:text-bg hover:opacity-100 focus:bg-text
            [&>*]:hover:stroke-bg2 [&>*]:focus:stroke-bg2"
            >
              <DeleteIcon className=" h-[20px] w-[20px] stroke-text stroke-2" />
            </button>
          </div>
          <button
            className="absolute right-0 h-full w-[calc(theme(spacing.xl)+theme(spacing.xs))] rounded-r-[2rem] transition-colors duration-300 ease-in-out 
          hover:bg-text 
          [&>*]:hover:stroke-header [&>*]:focus:stroke-header"
          >
            <SearchIcon className="mx-sm h-[25px] w-[25px] stroke-2 transition-colors duration-300 ease-in-out" />
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
