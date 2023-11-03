import { addToCart, setShouldCloseCart, openCart } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function AddToCartButton({id, selectedSize, quantity, className}) {
	const dispatch = useDispatch();

  return (
    <button
      className={className}
      onClick={() => {
        dispatch(setShouldCloseCart(false));
        
        dispatch(addToCart({ id: id, weight: selectedSize, quantity }));
        dispatch(openCart());

        setTimeout(() => {
          dispatch(setShouldCloseCart(true)); // allow cart to close after a short delay
          
        }, 500);
      }}
    >
      Dodaj do koszyka
    </button>
  );
}
