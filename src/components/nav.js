"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Nav = () => {
    const node = useRef();
    const [open, setOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 768);
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
        <div className="nav-bar" ref={node}>
            <button className="burger-btn" onClick={() => setOpen(!open)}>
                <Image
                    src="/icons/menu.svg"
                    width={30}
                    height={30}
                    alt="Menu"
                />
            </button>

            {(open || isLargeScreen) && (
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list__item nav__list__item--shop">
                            <a href="">SKLEP</a>
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
                            <a href="">O NAS</a>
                        </li>
                        <li className="nav__list__item">
                            <a href="">ARTYKUŁY</a>
                        </li>
                        <li className="nav__list__item">
                            <a href="">FAQ</a>
                        </li>
                        <li className="nav__list__item">
                            <a href="">KONTAKT</a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Nav;
