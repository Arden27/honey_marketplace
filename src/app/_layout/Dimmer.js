"use client";

import { useSelector } from "react-redux";

export default function Dimmer() {
  const isCartOpen = useSelector((state) => state.isCartOpen);
  const isSearchOpen = useSelector((state) => state.isSearchOpen);
  const isUserMenuOpen = useSelector((state) => state.isUserMenuOpen);
  const isBurgerMenuOpen = useSelector((state) => state.isBurgerMenuOpen);

  return (
    <div
      className={`fixed z-40 inset-0 bg-black transition-opacity duration-300 ease-in-out ${
        isCartOpen || isSearchOpen || isUserMenuOpen || isBurgerMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
      }`}
    ></div>
  );
}
