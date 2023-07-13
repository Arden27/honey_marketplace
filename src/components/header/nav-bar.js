"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Nav = () => {
    const node = useRef();
    const [open, setOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 1000);
        };
    
        // Call this function initially and whenever the window size changes.
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    
        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        if (!isLargeScreen) {
            setOpen(false);
        }
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
        <div className="nav-bar-wrapper" >
            <div className="nav-bar" ref={node}>
                <div className="burger-btn-wrapper">
                    <button className="button burger-btn" onClick={() => setOpen(!open)}>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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

                {(open || isLargeScreen) && (
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__list__item nav__list__item--shop">
                                <a className="button" href="">SKLEP</a>
                                <ul>
                                    <li className="nav__list__item--shop__item">
                                        <a href="">Promocje</a>
                                    </li>
                                    <li className="nav__list__item--shop__item">
                                        <a href="">Miody</a>
                                    </li>
                                    <li className="nav__list__item--shop__item">
                                        <a href="">Produkty pszczele</a>
                                    </li>
                                    <li className="nav__list__item--shop__item">
                                        <a href="">Świece</a>
                                    </li>
                                    <li className="nav__list__item--shop__item">
                                        <a href="">Zestawy</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav__list__item">
                                <a className="button" href="">O NAS</a>
                            </li>
                            <li className="nav__list__item">
                                <a className="button" href="">ARTYKUŁY</a>
                            </li>
                            <li className="nav__list__item">
                                <a className="button" href="">FAQ</a>
                            </li>
                            <li className="nav__list__item">
                                <a className="button" href="">KONTAKT</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default Nav;
