"use client";

import { useSelector } from "react-redux";

export default function Dimmer() {
  const isCartOpen = useSelector((state) => state.isCartOpen);

  return (
    <div
      className={`fixed z-40 inset-0 bg-black transition-opacity duration-300 ease-in-out ${
        isCartOpen ? "opacity-[40%]" : "opacity-0 pointer-events-none"
      }`}
    ></div>
  );
}
