"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
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
    <React.Fragment>
      <button ref={buttonRef} onClick={() => setOpen(!open)}>
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
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </button>

      <div className={open ? "flex" : "hidden"}
        ref={node}
      >
        <div className="">
          <p>item1</p>
          <p>item2</p>
          {/* Add cart items here */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
