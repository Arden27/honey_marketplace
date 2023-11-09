"use client";

import Button from "@/components/Button";
import BurgerIcon from "public/icons/menu.svg";
import Link from "next/link";
import DropdownMenu from "@/components/DropdownMenu";

import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openBurgerMenu, closeBurgerMenu } from "@/redux/store";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function BurgerBar() {
  const node = useRef();
  const buttonRef = useRef(null);
  const isBurgerMenuOpen = useSelector((state) => state.isBurgerMenuOpen);
  const [wasOpened, setWasOpened] = useState(false);

  const dispatch = useDispatch();

  useOutsideClick([buttonRef, node], () => {
    dispatch(closeBurgerMenu());
  });

  const handleLinkClick = (e) => {
    if (e.target.tagName === "A") {
      dispatch(closeBurgerMenu());
    }
  };

  return (
    <React.Fragment>
      <Button
        className=" mr-3xs hover:text-header lg:hidden"
        format="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          isBurgerMenuOpen
            ? dispatch(closeBurgerMenu())
            : dispatch(openBurgerMenu());
        }}
      >
        <BurgerIcon />
      </Button>

      <nav
        className={`fixed left-0 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-20 max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))]  w-[30svw] max-w-[calc(100%-theme(spacing.2xs))]  rounded-br-[2rem] bg-bar p-sm shadow
        ${
          isBurgerMenuOpen
            ? "slide-in-left flex"
            : wasOpened
            ? "slide-out-left flex"
            : "hidden"
        } `}
        ref={node}
        onClick={handleLinkClick}
      >
        <div className="relative flex w-full justify-center rounded-r-[2rem] font-btn text-sm uppercase">
          <ul className="flex flex-col gap-3xs">
            <li className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2  border-transparent p-xs hover:bg-text  hover:text-bar">
              <Link className="hover:text-bar" href="/">
                Główna
              </Link>
            </li>

            <li className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2 border-transparent p-xs hover:bg-text  hover:text-bar">
              {/* <DropdownMenu>
                <DropdownMenu.Button> */}

              <Link className="hover:text-bar" href="/sklep">
                Sklep
              </Link>
              {/* </DropdownMenu.Button>
                <DropdownMenu.Option>Domyślne</DropdownMenu.Option>
              </DropdownMenu> */}

              {/* <ul className="box">
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
                <li>
                  <Link href="/sklep?kategoria=zestawy">Zestawy</Link>
                </li>
              </ul> */}
            </li>
            <li className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2  border-transparent p-xs hover:bg-text  hover:text-bar">
              <Link className="hover:text-bar" href="/o-nas">
                O nas
              </Link>
            </li>
            <li className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2  border-transparent p-xs hover:bg-text  hover:text-bar">
              <Link className="hover:text-bar" href="/artykuly">
                Artykuły
              </Link>
            </li>
            <li className="flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2  border-transparent p-xs hover:bg-text hover:text-bar">
              <Link className="hover:text-bar" href="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
