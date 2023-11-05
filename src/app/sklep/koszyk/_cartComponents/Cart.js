import Box from "@/app/_layout/Box";
import CartItem from "@/app/sklep/koszyk/_cartComponents/CartItem";
import Button from "@/components/Button";
import ConsentsForm from "./ConsentsForm";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/store";
import { formatPrice } from "@/utils/formatPrice";

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
    <Box className="sticky top-[calc(theme(spacing.2xl)+2*theme(spacing.sm))] !flex max-h-[calc(100svh-2*theme(spacing.3xl))] flex-col  rounded-bl-[2rem] bg-bar">
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
          <div className="">
            <div className=" mb-2xs flex items-end justify-between whitespace-nowrap text-warning">
              <h3 className="text-end font-sans">Wyprzedaż:</h3>
              <h3 className="font-sans">-{formatPrice(totalPrice, 0.05)} zł</h3>
            </div>
            <div className=" mb-2xs flex items-end justify-between text-warning">
              <h3 className="text-end font-sans">Rabat:</h3>
              <h3 className="font-sans">-{formatPrice(totalPrice, 0.1)} zł</h3>
            </div>
            <div className="flex items-end justify-between [&_*]:whitespace-nowrap">
              <h2 className="text-end font-sans">Razem:</h2>
              <div className="flex items-center justify-center ">
                <h3 className="mx-xs font-sans text-warning line-through">
                  {formatPrice(totalPrice, 1.1)} zł
                </h3>
                <h2 className="border-b-2 border-text font-sans text-lg">
                  {formatPrice(totalPrice)} zł
                </h2>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <p>Koszyk jest pusty</p>
      )}

      <div className="flex flex-col items-center ">
        <ConsentsForm />
        <Button
          className=" hover:text-bg"
          href=""
          type="lg"
        >
          Przejdź do płatności
        </Button>
      </div>
    </Box>
  );
}
