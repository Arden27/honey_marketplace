import Box from "@/components/Box";
import CartItem from "@/app/sklep/koszyk/cartComponents/CartItem";
import Btn from "@/components/btn/Btn";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/store";
import { formatPrice } from "@/components/formatPrice";

export default function Cart({}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();
  const removeFromCartAction = (item) => dispatch(removeFromCart(item));

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
    <Box className="sticky top-[calc(theme(spacing.2xl)+2*theme(spacing.sm))] bg-bar">
      <h2>Produkty</h2>

      <div
        className={`min-h-[calc(3*theme(spacing.3xl)+theme(spacing.xl)+theme(spacing.md))] flex-col rounded-bl-[2rem]`}
      >
        {cartItems.length > 0 ? (
          <React.Fragment>
            <div className="cart-items-scrollbar mb-md min-h-[calc(theme(spacing.3xl)+theme(spacing.xl)+theme(spacing.sm))] overflow-auto rounded-tl-[2rem] rounded-tr-[2rem] border-b-2 border-text pr-3xs">
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
              className=" mb-2xs flex items-end justify-between whitespace-nowrap text-warning
              [&>*]:font-sans"
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
          </React.Fragment>
        ) : (
          <p>Koszyk jest pusty</p>
        )}
      </div>

      <Btn
        className="justify-self-center"
        href=""
        type="lg hover"
        hoverColor="bg"
      >
        Sprawdź już dziś!
      </Btn>
    </Box>
  );
}
