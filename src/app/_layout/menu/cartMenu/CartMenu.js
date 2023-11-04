"use client";

import Button from "@/components/Button";
import ShoppingCartIcon from "public/icons/shopping-cart.svg";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/store";

import CartItem from "../../../sklep/koszyk/_cartComponents/CartItem";
import { formatPrice } from "@/utils/formatPrice";
import { openCart, closeCart } from "@/redux/store";

import useOutsideClick from "@/hooks/useOutsideClick";

export default function Cart() {
  const node = useRef();
  const buttonRef = useRef();

  const isCartOpen = useSelector((state) => state.isCartOpen);
  //const shouldCloseCart = useSelector((state) => state.shouldCloseCart);

  const cartItems = useSelector((state) => state.cart);
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const items = useSelector((state) => state.items);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const removeFromCartAction = (item) => dispatch(removeFromCart(item));

  const [wasOpened, setWasOpened] = useState(false);

  useOutsideClick([node, buttonRef], () => {
    // if (shouldCloseCart) {
    //   dispatch(closeCart());
    // }
    dispatch(closeCart());
  });

  useEffect(() => {
    // Calculate total price when cartItems or items change
    let total = 0;
    let count = 0;
    for (let cartItem of cartItems) {
      const item = items.find((item) => item.id === cartItem.id);
      const size = item.sizes.find((size) => size.size === cartItem.weight);
      total += size.price * cartItem.quantity;
      count += cartItem.quantity;
    }
    setCartItemsCount(count)
    setTotalPrice(total);
  }, [cartItems, items]);

  return (
    <React.Fragment>
      <Button
        className={`ml-3xs hover:text-header text-header
        ${isCartOpen ? "bg-text [&>*]:text-header " : ""}
        `}
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          isCartOpen ? dispatch(closeCart()) : dispatch(openCart());
        }}
      >
        <ShoppingCartIcon />
        {cartItemsCount != 0 && 
        <div className="absolute -right-[9px] -top-[8px] flex h-[19px] w-[19px] items-center justify-center rounded-full bg-text text-xs text-header">
          {cartItemsCount}
        </div>}
      </Button>

      <div
        className={`cart-items-scrollbar fixed right-0 top-[calc(theme(spacing.2xl)+theme(spacing.sm))]  -z-20  max-h-[calc(100%-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))] w-[30rem] max-w-[calc(100%-theme(spacing.2xs))] flex-col gap-sm overflow-auto rounded-bl-[2rem] bg-bar p-sm shadow
        ${
          isCartOpen
            ? "slide-in-right flex "
            : wasOpened
            ? "slide-out-right flex"
            : "hidden"
        } `}
        ref={node}
      >
        {cartItems.length > 0 ? (
          <React.Fragment>
            <div className="cart-items-scrollbar min-h-[calc(theme(spacing.3xl)+theme(spacing.xl)+theme(spacing.sm))] overflow-auto rounded-tl-[2rem] rounded-tr-[2rem] border-b-2 border-text">
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

            <div>
              <div className="mb-2xs flex  justify-between whitespace-nowrap text-warning ">
                <h3 className="text-end font-sans">Wyprzedaż:</h3>
                <h3 className="font-sans">
                  -{formatPrice(totalPrice, 0.05)} zł
                </h3>
              </div>
              <div className=" mb-2xs flex items-end justify-between text-warning">
                <h3 className="text-end font-sans">Rabat:</h3>
                <h3 className="font-sans">
                  -{formatPrice(totalPrice, 0.1)} zł
                </h3>
              </div>
              <div className="flex items-end justify-between [&_*]:whitespace-nowrap">
                <h2 className="text-end font-sans">Razem:</h2>
                <div className="flex items-center justify-center">
                  <h3 className="mx-xs font-sans text-warning line-through">
                    {formatPrice(totalPrice, 1.1)} zł
                  </h3>
                  <h2 className="border-b-2 border-text font-sans text-lg">
                    {formatPrice(totalPrice)} zł
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className=" hover:text-bar "
                href="/sklep/koszyk"
                type="lg"
                onClick={() => dispatch(closeCart())}
              >
                Zamawiam
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <p>Koszyk jest pusty</p>
        )}
      </div>
    </React.Fragment>
  );
}
