"use client";

import Btn from "@/components/btns/Btn";
import ShoppingCartIcon from "public/icons/shopping-cart.svg";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/store";

import CartItem from "../../app/sklep/koszyk/_cartComponents/CartItem";
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
      {/* ARTEM - Tutaj coś nie moge podmienić buttona na Btn, poniżej jak chcę */}

      <button
        className={`btn-icon ml-3xs [&>*]:hover:stroke-header [&>*]:focus:stroke-header
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

      {/* <Btn
        className={` hover:text-header focus:text-header ml-3xs
        ${isCartOpen ? "bg-text text-header" : ""}
        `}
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          isCartOpen ? dispatch(closeCart()) : dispatch(openCart());
        }}
      >
        <ShoppingCartIcon />
      </Btn> */}

      <div
        className={`fixed right-0 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-20  max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))] min-h-[calc(90vh-3*theme(spacing.3xl)+theme(spacing.xl)+theme(spacing.md))] w-[30rem] max-w-[calc(100%-theme(spacing.2xs))] flex-col rounded-bl-[2rem] bg-bar p-sm shadow
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

            <Btn
              className="self-center hover:text-bar"
              href="/sklep/koszyk"
              type="lg"
              onClick={() => dispatch(closeCart())}
            >
              Zamawiam
            </Btn>
          </React.Fragment>
        ) : (
          <p>Koszyk jest pusty</p>
        )}
      </div>
    </React.Fragment>
  );
}
