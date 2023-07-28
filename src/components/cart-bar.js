"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const node = useRef();
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      <button ref={buttonRef} onClick={() => setOpen(!open)}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </button>

      <div
        className={`
      max-w-3/5 no-scrollbar absolute right-0 top-header-sm flex max-h-[calc(100svh-theme(spacing.3xl))] w-[40rem] flex-col overflow-scroll rounded-l-[3rem]
      bg-cart-bar p-gap md:top-header-lg md:max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm))] pt-xl md:pt-gap
      ${open ? "flex" : "hidden"} `}
        ref={node}
      >
        <div className="mb-gap grid h-[15rem] grid-cols-[1fr_2fr] grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[3rem] bg-cart-bar-item ">
          <Image
            className="row-span-2 h-full w-full object-cover object-center"
            src="/img/home/jak-rozpoznac.jpg"
            width={50}
            height={50}
            alt="Nazwa produktu"
          />
          <h3 className="p-sm">Miód rzepakowy z nutką gryki</h3>

          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] p-sm">
            <button className="btn-sm">
              -1+
              {/* <RadioBtn /> */}
            </button>

            <h3 className="flex items-center justify-center ">x 99,99zł</h3>
            <button className="btn-sm">DEL</button>
          </div>
        </div>

        <div className="mx-xs mb-xs flex items-end justify-between text-warning">
          <h3 className="text-end">Rabat:</h3>

          <h3 className="">-999,99 zł</h3>
        </div>

        <div className="mx-xs mb-gap flex items-end justify-between">
          <h2 className="text-end">Razem:</h2>

          <h2>999,99 zł</h2>
        </div>

        <button className="btn-lg  bg-bg hover:text-bg ">Zamawiam</button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
