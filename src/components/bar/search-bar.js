"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SearchIcon from "public/icons/search.svg";
import DeleteIcon from "public/icons/x.svg";

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
      <button
        className="btn-icon fixed right-[calc(theme(spacing.sm)+theme(spacing.lg)+theme(spacing.xs)+theme(spacing.3xs))] hidden 330px:flex 430px:right-[calc(theme(spacing.sm)+2*theme(spacing.lg)+2*theme(spacing.xs)+2*theme(spacing.3xs))] [&>*]:hover:stroke-header [&>*]:focus:stroke-header"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <SearchIcon className="h-[25px] w-[25px]" />
      </button>

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
          {/* <div>
            <SearchIcon className="absolute top-0 mx-sm h-[calc(theme(spacing.lg)+theme(spacing.xs))] w-[25px] stroke-2 opacity-50" />
          </div> */}

          <input
            type="search"
            id="search"
            placeholder="Wyszukaj..."
            className="h-[calc(theme(spacing.lg)+theme(spacing.xs))] w-full rounded-[2rem] border-2 border-solid border-text bg-transparent pl-xl pr-[calc(theme(spacing.2xl)+3*theme(spacing.sm))] text-text placeholder:text-text placeholder:opacity-50"
          />
          <div className="absolute left-sm flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-center">
            <button
              className="flex h-md w-md items-center justify-center  rounded-[2rem] text-center opacity-50
            hover:bg-text hover:text-bg hover:opacity-100 focus:bg-text
            [&>*]:hover:stroke-bg2 [&>*]:focus:stroke-bg2"
            >
              <DeleteIcon className=" h-[20px] w-[20px] stroke-text stroke-2" />
            </button>
          </div>
          <button
            className="absolute right-0 h-full w-[calc(theme(spacing.xl)+theme(spacing.xs))] min-w-0 rounded-r-[2rem] transition-colors duration-300 ease-in-out 
          hover:bg-text 
          [&>*]:hover:stroke-header [&>*]:focus:stroke-header"
          >
            <SearchIcon className="mx-sm h-[25px] w-[25px] stroke-2 transition-colors duration-300  ease-in-out" />
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
