"use client"

import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import Image from "next/image";

const Nav = () => {
    const node = useRef();
    const [open, setOpen] = useState(false);
    

    

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
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
        <div className="page-wrapper nav-bar-wrapper" >
            <div className={`nav-bar ${open ? 'open' : ''}`} ref={node}>
                <div className="burger-btn-wrapper">
                    <button className="button burger-btn" onClick={() => setOpen(!open)}>
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
                </div>

                <div className="shop-btn-wrapper">
                    <div className="button shop-btn">Sklep</div>
                </div>

                
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list__item nav__list__item--shop">
                            <a className="button nav__list__item--shop--btn" href="">Sklep</a>
                            <ul>
                                <li className="nav__list__item--shop__item">
                                    <a className="button nav__list__item--shop__item--btn" href="">Promocje</a>
                                </li>
                                <li className="nav__list__item--shop__item">
                                    <a className="button nav__list__item--shop__item--btn" href="">Miody</a>
                                </li>
                                <li className="nav__list__item--shop__item">
                                    <a className="button nav__list__item--shop__item--btn" href="">Produkty pszczele</a>
                                </li>
                                <li className="nav__list__item--shop__item">
                                    <a className="button nav__list__item--shop__item--btn" href="">Świece</a>
                                </li>
                                <li className="nav__list__item--shop__item">
                                    <a className="button nav__list__item--shop__item--btn" href="">Zestawy</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__list__item">
                            <Link 
                                className="button" 
                                href="/"
                                onClick={() => setOpen(false)}
                            >
                                O NAS
                            </Link>
                        </li>
                        <li className="nav__list__item">
                            <a className="button nav__list__item--btn" href="">Artykuły</a>
                        </li>
                        <li className="nav__list__item">
                            <a className="button nav__list__item--btn" href="">Matki</a>
                        </li>
                        <li className="nav__list__item">
                            <a className="button nav__list__item--btn" href="">Kontakt</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
