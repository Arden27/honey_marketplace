"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SearchIcon from "public/icons/search.svg";

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
        className=" btn-sm hidden 430px:flex [&>*]:hover:stroke-header"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <SearchIcon className="h-[25px] w-[25px] stroke-text stroke-2 " />
      </button>

      <div
        className={` bar left-1/2 -z-30 w-[calc(100%-theme(spacing.xs))] max-w-[calc(theme(screens.xl)+theme(spacing.sm))] self-center  rounded-b-[2rem]
        ${
          open
            ? "slide-in-top flex"
            : wasOpened
            ? "slide-out-top flex"
            : "hidden "
        } `}
        ref={node}
      >
        <div className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae amet
          veritatis maiores, nam aliquam aliquid aspernatur voluptatem totam eos
          recusandae vero eligendi at tenetur consequatur? Ad iusto doloribus
          consectetur laboriosam cupiditate autem! Dolores repudiandae ullam
          iure? Nesciunt tempore tenetur doloribus quidem! Minus itaque fuga
          voluptatum numquam quibusdam ipsam eaque id nam qui harum deserunt
          consequuntur omnis voluptas facere, excepturi facilis, iure temporibus
          similique asperiores eos. Ullam quibusdam ipsa eligendi velit.
          <input />
          <button>Szukaj</button>
        </div>
      </div>
    </React.Fragment>
  );
}
