"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import BurgerIcon from "public/icons/menu.svg";

export default function BurgerBar() {
  const node = useRef();
  const buttonRef = useRef(null);
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

  const handleLinkClick = (e) => {
    if (e.target.tagName === "A") {
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
    <React.Fragment>
      <button
        ref={buttonRef}
        className="btn-icon fixed lg:hidden [&>*]:hover:stroke-header [&>*]:focus:stroke-header"
        onClick={() => {
          setWasOpened(true);
          setOpen(!open);
        }}
      >
        <BurgerIcon className="h-[25px] w-[25px]" />
      </button>

      <nav
        className={`bar left-0 w-[30rem] max-w-[calc(100%-theme(spacing.2xs))] rounded-br-[1.5rem]
        ${
          open
            ? "slide-in-left flex"
            : wasOpened
            ? "slide-out-left flex"
            : "hidden"
        } `}
        ref={node}
      >
        <ul>
          <li>
            <Link href="/">Główna</Link>
          </li>
          <li>
            <Link href="/sklep">Sklep</Link>
            <ul>
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
      </nav>
    </React.Fragment>
  );
}
