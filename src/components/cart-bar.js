"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import Link from "next/link";
import Image from "next/image";
import CartItem from "./cart-item";

const Cart = () => {
  const node = useRef();
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart); 
  const items = useSelector((state) => state.items);

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
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

      <div
        className={`
      max-w-3/5 no-scrollbar absolute right-0 top-header-sm flex max-h-[calc(100svh-theme(spacing.3xl))] w-[40rem] flex-col overflow-scroll rounded-l-[3rem]
      bg-cart-bar p-gap md:top-header-lg md:max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm))] pt-xl md:pt-gap
      ${open ? "flex" : "hidden"} `}
        ref={node}
      >
        {
          cartItems.length > 0 ? (
            <React.Fragment>
              {
                cartItems.map((cartItem, index) => {
                  const item = items.find(item => item.id === cartItem.id);
                  const size = item.sizes.find(size => size.size === cartItem.weight);
                
                  return (
                    <CartItem 
                      key={cartItem.id + "-" + index} // Create a unique key by combining the item id and index
                      item={{
                        ...item,
                        weight: cartItem.weight,
                        quantity: cartItem.quantity,
                        price: size.price
                      }} 
                    />
                  );
                })
              }
              <div className="mx-xs mb-xs flex items-end justify-between text-warning">
                <h3 className="text-end">Rabat:</h3>
                <h3 className="">-999,99 zł</h3>
              </div>

              <div className="mx-xs mb-gap flex items-end justify-between">
                <h2 className="text-end">Razem:</h2>
                <h2>999,99 zł</h2>
              </div>

              <button className="btn-lg  bg-bg hover:text-bg ">Zamawiam</button>
            </React.Fragment>
          ) : (
            <p>Koszyk jest pusty</p>
          )
        }

        
      </div>
    </React.Fragment>
  );
};

export default Cart;
