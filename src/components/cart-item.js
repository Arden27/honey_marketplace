import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '@/redux/store';

const CartItem = ({item, removeFromCart }) => {
  const [quantity, setQuantity] = useState(item.quantity); // Initial quantity is from props
  const dispatch = useDispatch();

  const handleQuantityChange = (value) => {
    // const value = Math.round(Number(e.target.value));
    if (value < 1) {
      setQuantity(1);
    } else if (value > 99) {
      setQuantity(99);
    } else {
      setQuantity(value);
    }
    dispatch(updateCartItem({ id: item.id, weight: item.weight, quantity: value })); // Update the cart item in the store
  };
	
	useEffect(() => {
		setQuantity(item.quantity);
	}, [item.quantity]);

	const handleRemove = () => {
    dispatch(removeFromCart(item));
  };
	
  return (
    <div className="mb-gap grid h-[15rem] grid-cols-[1fr_2fr] grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[3rem] bg-cart-bar-item ">
      <Image
        className="row-span-2 h-full w-full object-cover object-center"
        src={item.image}
        width={50}
        height={50}
        alt={item.name}
      />
      <h3 className="p-sm">{item.name}</h3>

      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] p-sm">
        <div className="flex items-center">
          <button
            className="btn-sm"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </button>
          <input
            className="h-xl w-xl rounded-[3rem] bg-transparent text-center font-btn text-sm"
            type="number"
            value={quantity.toString()}
            min="1"
            max="99"
            step="1"
            onChange={(e) => handleQuantityChange(Math.round(Number(e.target.value)))}
          />
          <button
            className="btn-sm"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>

        <h3 className="flex items-center justify-center ">x {item.price} zł</h3>
        <button className="btn-sm" onClick={handleRemove}>DEL</button> {/* Make sure to wire up this delete button as well */}
      </div>
    </div>
  );
};

export default CartItem;