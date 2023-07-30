"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
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
    <div
      className="m-auto flex h-3xl w-[calc(100%-2*theme(spacing.md))] items-center
      md:h-[calc(theme(spacing.3xl)+theme(spacing.sm))]"
    >
      <button
        ref={buttonRef}
        className="btn-sm mr-3xs lg:hidden [&>*]:hover:stroke-header"
        onClick={() => setOpen(!open)}
      >
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
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <Link
        className="btn-sm btn-border hover:text-header lg:hidden"
        href="/sklep"
      >
        Sklep
      </Link>

      <nav
        className={` 
        max-lg:h-[calc(100svh-theme(spacing.3xl)) rounded-r-[3rem] lg:flex max-lg:absolute max-lg:left-0 max-lg:top-header-lg max-lg:h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm))] max-lg:w-4/5
        max-lg:bg-nav max-md:top-header-sm 
        max-md:h-[calc(100svh-theme(spacing.3xl))]

        ${open ? "flex " : "hidden"} `}
        ref={node}
      >
        <ul className="lg:[&_a]:btn-sm lg:flex hover:lg:[&_a]:text-header [&>*]:mr-3xs">
          <li>
            <Link className=" lg:!border-text" href="/sklep">
              Sklep
            </Link>

            <ul className="lg:hidden">
              <li>
                <Link href="/sklep/promocje">Promocje</Link>
              </li>
              <li>
                <Link href="/sklep/miody">Miody</Link>
              </li>
              <li>
                <Link href="/sklep/produkty-pszczele">Produkty pszczele</Link>
              </li>
              <li>
                <Link href="/sklep/swiece">Świece</Link>
              </li>
              <li>
                <Link href="/sklep/zestawy">Zestawy</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="lg:!hidden xl:!flex" href="/">
              Główna
            </Link>
          </li>
          <li>
            <Link href="/o-nas">O nas</Link>
          </li>
          <li>
            <Link href="/artykuly">Artykuły</Link>
          </li>
          <li>
            <Link href="/matki">Matki</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
