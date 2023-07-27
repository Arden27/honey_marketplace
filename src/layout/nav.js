"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
	const node = useRef();
  const buttonRef = useRef(null);
	const [open, setOpen] = useState(false);

	const handleClickOutside = (e) => {
		if (node.current.contains(e.target) || buttonRef.current.contains(e.target)) {
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
      <button ref={buttonRef} className="lg:hidden" onClick={() => setOpen(!open)}>
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
        className="btn-sm
        hover:text-header-bar-bg
        lg:hidden"
        href="/sklep"
      >
        Sklep
      </Link>

      <nav
        className={`!lg:[all:unset] w-3/5 h-full sticky top-header-bar-sm ${open ? "flex" : "hidden"} lg:sticky lg:top-0 lg:flex lg:h-full lg:w-full lg:items-center`}
        ref={node}
      >
        <ul className="lg:flex">
          <li className="">
            <Link className="btn-sm hover:text-header-bar-bg" href="/sklep">
              Sklep
            </Link>

            <ul className="lg:hidden">
              <li className="">
                <Link
                  className="btn-sm hover:text-header-bar-bg"
                  href="/sklep/promocje"
                >
                  Promocje
                </Link>
              </li>
              <li className="">
                <Link
                  className="btn-sm hover:text-header-bar-bg"
                  href="/sklep/miody"
                >
                  Miody
                </Link>
              </li>
              <li className="">
                <Link
                  className="btn-sm hover:text-header-bar-bg"
                  href="/sklep/produkty-pszczele"
                >
                  Produkty pszczele
                </Link>
              </li>
              <li className="">
                <Link
                  className="btn-sm hover:text-header-bar-bg"
                  href="/sklep/swiece"
                >
                  Świece
                </Link>
              </li>
              <li className="">
                <Link
                  className="btn-sm hover:text-header-bar-bg"
                  href="/sklep/zestawy"
                >
                  Zestawy
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav__list__item">
            <Link className="btn-sm hover:text-header-bar-bg" href="/o-nas">
              O nas
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="btn-sm hover:text-header-bar-bg" href="/artykuly">
              Artykuły
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="btn-sm hover:text-header-bar-bg" href="/matki">
              Matki
            </Link>
          </li>
          <li className="nav__list__item">
            <Link className="btn-sm hover:text-header-bar-bg" href="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
