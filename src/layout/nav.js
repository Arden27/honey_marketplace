"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import Image from "next/image";
import BurgerIcon from "public/icons/menu.svg";

export default function NavBar() {
  const node = useRef();
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [wasOpened, setWasOpened] = useState(false)

  const handleClickOutside = (e) => {
      if (
        node.current.contains(e.target) ||
        buttonRef.current.contains(e.target)
      ) {
        return;
      }
      setOpen(false);
    };

  const handleLinkClick = (e) => {
    if (e.target.tagName === 'A') {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    if (node.current) {
      node.current.addEventListener("click", handleLinkClick);
    }
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (node.current) {
        node.current.removeEventListener("click", handleLinkClick);
      }
    };
  }, []);

  return (
    <div
      className="z-30 m-auto flex h-3xl w-[calc(100%-2*theme(spacing.md))] items-center
      md:h-[calc(theme(spacing.3xl)+theme(spacing.sm))]"
    >
      <button
        ref={buttonRef}
        className="btn-sm mr-3xs lg:hidden [&>*]:hover:stroke-header"
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <BurgerIcon className="h-[25px] w-[25px] stroke-text stroke-2 hover:stroke-header" />
      </button>
      <Link
        className="btn-sm btn-border hover:text-header lg:hidden"
        href="/sklep"
      >
        Sklep
      </Link>

      <nav
        className={`  max-lg:h-[calc(100svh-theme(spacing.3xl))
        rounded-r-[3rem]  lg:flex max-lg:absolute max-lg:left-0 max-lg:top-header-lg max-lg:h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm))]
        max-lg:w-4/5 max-lg:bg-nav 
        max-md:top-header-sm max-md:h-[calc(100svh-theme(spacing.3xl))]
        ${open ? "slide-in-left flex" : wasOpened ? "slide-out-left flex" : "hidden"} `}
        ref={node}
      >
        <ul className="lg:[&_a]:btn-sm lg:flex [&>*]:mr-3xs hover:lg:[&_a]:text-header">
          <li>
            <Link className=" lg:!border-text" href="/sklep">
              Sklep
            </Link>

            <ul className="lg:hidden">
              <li>
                <Link href="/sklep?categoria=promocje">Promocje</Link>
              </li>
              <li>
                <Link href="/sklep?categoria=miody">Miody</Link>
              </li>
              <li>
                <Link href="/sklep?categoria=produkty-pszczele">Produkty pszczele</Link>
              </li>
              <li>
                <Link href="/sklep?categoria=swiece">Świece</Link>
              </li>
              <li>
                <Link href="/sklep?categoria=zestawy">Zestawy</Link>
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
