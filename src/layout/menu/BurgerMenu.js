"use client";

import Link from "next/link";
import Btn from "@/components/btns/Btn";
import BurgerIcon from "public/icons/menu.svg";

import React, { useState, useEffect, useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function BurgerBar() {
  const node = useRef();
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);

  const handleOutsideClick = () => {
    setOpen(false);
  };

  useOutsideClick([buttonRef, node], handleOutsideClick);

  const handleLinkClick = (e) => {
    if (e.target.tagName === "A") {
      setOpen(false);
    }
  };

  // useEffect(() => {
  //   // Add when mounted
  //   //document.addEventListener("mousedown", handleClickOutside);
  //   if (node.current) {
  //     node.current.addEventListener("click", handleLinkClick);
  //   }
  //   // Return function to be called when unmounted
  //   return () => {
  //     //document.removeEventListener("mousedown", handleClickOutside);
  //     if (node.current) {
  //       node.current.removeEventListener("click", handleLinkClick);
  //     }
  //   };
  // }, []);

  return (
    <React.Fragment>
      <Btn
        className=" mr-3xs hover:text-header focus:text-header lg:hidden"
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <BurgerIcon />
      </Btn>

      <nav
        className={`fixed left-0 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-20 max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))]  w-[30rem] max-w-[calc(100%-theme(spacing.2xs))] rounded-br-[2rem]  bg-bar p-sm shadow 
        ${
          open
            ? "slide-in-left flex"
            : wasOpened
            ? "slide-out-left flex"
            : "hidden"
        } `}
        ref={node}
        onClick={handleLinkClick}
      >
        <div className="relative -left-sm w-[calc(100%+theme(spacing.md))] rounded-r-[2rem] bg-bg2 ">
          <ul
            className="[&_ul]:btnsm [&>li]: [&>li>a]:bg- flex flex-col  [&>li>a]:mb-3xs 
        [&>li>a]:border-text"
          >
            <li>
              <Link href="/">Główna</Link>
            </li>

            <li>
              <Link href="/sklep">Sklep</Link>
              <ul className="box">
                <li>
                  <Link href="/sklep?kategoria=promocje">Promocje</Link>
                </li>
                <li>
                  <Link href="/sklep?kategoria=miody">Miody</Link>
                </li>
                <li>
                  <Link href="/sklep?kategoria=produkty-pszczele">
                    Produkty pszczele
                  </Link>
                </li>
                <li className="!hidden">
                  <Link href="/sklep?kategoria=miody-pitne">Miody Pitne</Link>
                </li>
                <li className="!hidden">
                  <Link href="/sklep?kategoria=swiece">Świece</Link>
                </li>
                <li>
                  <Link href="/sklep?kategoria=zestawy">Zestawy</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/o-nas">O nas</Link>
            </li>
            <li>
              <Link href="/artykuly">Artykuły</Link>
            </li>
            <li className="!hidden">
              <Link href="/matki">Matki</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
