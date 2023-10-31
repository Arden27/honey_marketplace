"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/store";


import Btn from "@/components/btn/Btn";
import Link from "next/link";

import ShoppingCartIcon from "public/icons/shopping-cart.svg";

import CartItem from "../../app/sklep/koszyk/cartComponents/CartItem";
import { formatPrice } from "@/components/formatPrice";
import { openCart, closeCart } from "@/redux/store";

import useOutsideClick from "@/hooks/useOutsideClick";

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

  const handleOutsideClick = () => {
    if (shouldCloseCart) {
      dispatch(closeCart());
    }
  };

  useOutsideClick([node, buttonRef], handleOutsideClick);

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
        className={`btn-icon fixed [&>*]:hover:stroke-header [&>*]:focus:stroke-header 
        ${isCartOpen ? "border-2 border-black" : ""}
        `}
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          isCartOpen ? dispatch(closeCart()) : dispatch(openCart());
        }}
      >
        <ShoppingCartIcon className="h-[25px] w-[25px]" />
      </button>

      <div
        className={`bar right-0 min-h-[calc(90vh-3*theme(spacing.3xl)+theme(spacing.xl)+theme(spacing.md))] w-[30rem] flex-col rounded-bl-[2rem]
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
            <div className="cart-items-scrollbar mb-md  min-h-[calc(theme(spacing.3xl)+theme(spacing.xl)+theme(spacing.sm))] overflow-auto rounded-tl-[2rem] rounded-tr-[2rem] border-b-2 border-text ">
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
              className=" mb-2xs flex items-end justify-between whitespace-nowrap
             text-warning [&>*]:font-sans"
            >
              <h3 className="text-end">Wyprzedaż:</h3>
              <h3 className="">-{formatPrice(totalPrice, 0.05)} zł</h3>
            </div>
            <div
              className=" mb-2xs flex items-end justify-between text-warning
             [&>*]:font-sans"
            >
              <h3 className="text-end">Rabat:</h3>
              <h3 className="">-{formatPrice(totalPrice, 0.1)} zł</h3>
            </div>
            <div className="mb-sm flex items-end justify-between [&_*]:whitespace-nowrap">
              <h2 className="text-end font-sans">Razem:</h2>
              <div className="flex items-center justify-center [&>*]:font-sans ">
                <h3 className="mx-xs text-warning line-through">
                  {formatPrice(totalPrice, 1.1)} zł
                </h3>
                <h2 className="border-b-2 border-text font-sans text-lg">
                  {formatPrice(totalPrice)} zł
                </h2>
              </div>
            </div>
            {/* <Link
              href="/sklep/koszyk"
              className="btn-lg  self-center border-text  hover:text-bg"
              onClick={() => dispatch(closeCart())}
            >
              Zamawiam
            </Link> */}
            <Btn
              className="self-center"
              href="/sklep/koszyk"
              type="lg"
              hoverColor="red-500"
              onClick={() => dispatch(closeCart())}
            >
              Zaloguj się
            </Btn>
          </React.Fragment>
        ) : (
          <p>Koszyk jest pusty</p>
        )}
      </div>
    </React.Fragment>
  );
}
