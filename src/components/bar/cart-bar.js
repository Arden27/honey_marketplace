"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/store";

import Link from "next/link";

import Image from "next/image";
import ShoppingCartIcon from "public/icons/shopping-cart.svg";

import CartItem from "../box/cart-item";
import { formatPrice } from "@/components/formatPrice";
import { openCart, closeCart, setShouldCloseCart } from "@/redux/store";

export default function Cart() {
  const node = useRef();
  const buttonRef = useRef();

  const isCartOpen = useSelector((state) => state.isCartOpen);
  const shouldCloseCart = useSelector((state) => state.shouldCloseCart);

  const cartItems = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const removeFromCartAction = (item) => dispatch(removeFromCart(item));

  const [wasOpened, setWasOpened] = useState(false);

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      return;
    }
    if (shouldCloseCart) {
      dispatch(closeCart());
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mouseup", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

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
          setWasOpened(true);
          isCartOpen ? dispatch(closeCart()) : dispatch(openCart());
        }}
      >
        <ShoppingCartIcon className="h-[25px] w-[25px] stroke-text stroke-2 " />
      </button>

      <div
        className={` bar right-0 flex-col rounded-l-[2rem]
        ${
          isCartOpen
            ? "slide-in-right flex"
            : wasOpened
            ? "slide-out-right flex"
            : "hidden"
        } `}
        ref={node}
      >
        {cartItems.length > 0 ? (
          <React.Fragment>
            <div className="cart-items-scrollbar rounded-tl-[2rem] border-b-2 mb-lg grid gap-gap overflow-auto border-text pb-gap pr-3xs">
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

            <Link
              href="/sklep/koszyk"
              className="btn-lg  self-center border-text  hover:text-bg"
            >
              Zamawiam
            </Link>
          </React.Fragment>
        ) : (
          <p>Koszyk jest pusty</p>
        )}
      </div>
    </React.Fragment>
  );
}
