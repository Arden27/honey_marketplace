"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";
import CartItem from "../box/cart-item";
import { formatPrice } from "@/components/formatPrice";
import { openCart, closeCart, setShouldCloseCart } from "@/redux/store";

const Cart = () => {
  const node = useRef();
  const buttonRef = useRef(null);

  const isCartOpen = useSelector((state) => state.isCartOpen);
  const shouldCloseCart = useSelector((state) => state.shouldCloseCart);
  // const [open, setOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const removeFromCartAction = (item) => dispatch(removeFromCart(item));

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      // inside click
      console.log("click inside")
      return;
    }
    // outside click
    // setOpen(false);
    console.log("click outside")
    console.log("shouldCloseCart: ", shouldCloseCart)
    if (shouldCloseCart) {
      dispatch(closeCart()); // close the cart using Redux only if shouldCloseCart is true
    }
    //dispatch(closeCart());
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(cartItems);
    // function to run when cartItems changes
  }, [cartItems]);

  useEffect(() => {
    // Calculate total price when cartItems or items change
    let total = 0;
    for (let cartItem of cartItems) {
      const item = items.find((item) => item.id === cartItem.id);
      const size = item.sizes.find((size) => size.size === cartItem.weight);
      total += size.price * cartItem.quantity;
    }
    setTotalPrice(total);
  }, [cartItems, items]);

  return (
    <React.Fragment>
      <button
        className="btn-sm [&>*]:hover:stroke-header"
        ref={buttonRef}
        onClick={() => {
          isCartOpen ? 
          dispatch(closeCart()) : dispatch(openCart())}}
      >
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
        className={` absolute right-0 top-header-sm flex max-h-[calc(100svh-theme(spacing.3xl))] w-[45rem] max-w-[100svw] flex-col rounded-l-[3rem] bg-cart-bar p-gap
      md:top-header-lg md:max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm))]
      ${isCartOpen ? "flex" : "hidden"} `}
        ref={node}
      >
        {cartItems.length > 0 ? (
          <React.Fragment>
            <div className="cart-items-scrollbar mb-xl grid gap-gap overflow-auto border-b-2 border-text pb-gap pr-2xs">
              {cartItems.map((cartItem, index) => {
                const item = items.find((item) => item.id === cartItem.id);
                const size = item.sizes.find(
                  (size) => size.size === cartItem.weight,
                );

                return (
                  <CartItem
                    key={cartItem.id + "-" + index} // Create a unique key by combining the item id and index
                    item={{
                      ...item,
                      weight: cartItem.weight,
                      quantity: cartItem.quantity,
                      price: size.price,
                    }}
                    removeFromCart={removeFromCartAction}
                  />
                );
              })}
            </div>
            <div
              className=" mb-xs flex items-end justify-between text-warning
             [&>*]:font-sans"
            >
              <h3 className="text-end">Rabat:</h3>
              <h3 className="">-{formatPrice(totalPrice, 0.1)} zł</h3>
            </div>

            <div className=" mb-gap flex items-end justify-between">
              <h2 className="text-end font-sans">Razem:</h2>
              <div className="flex items-center justify-center [&>*]:font-sans ">
                <h3 className="mx-xs text-warning line-through">
                  {formatPrice(totalPrice, 1.1)} zł
                </h3>
                <h2 className="text-md">{formatPrice(totalPrice)} zł</h2>
              </div>
            </div>

            <button className="btn-lg border-text bg-cart-bar hover:text-bg">
              Zamawiam
            </button>
          </React.Fragment>
        ) : (
          <p>Koszyk jest pusty</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
