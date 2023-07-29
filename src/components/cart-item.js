import Image from 'next/image';
import React from 'react';

const CartItem = ({item}) => {
  const [quantity, setQuantity] = useState(item.quantity); // Initial quantity is from props
  const dispatch = useDispatch();
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
            <button className="btn-sm">
              -1+
              {/* <RadioBtn /> */}
            </button>

            <h3 className="flex items-center justify-center ">x {item.price} zł</h3>
            <button className="btn-sm">DEL</button>
          </div>
        </div>
  );
};

export default CartItem;