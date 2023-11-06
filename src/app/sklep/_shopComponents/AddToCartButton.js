import { addToCart } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function AddToCartButton({id, selectedSize, quantity, className}) {
	const dispatch = useDispatch();

  return (
    <button
      className={className}
      onClick={() => {
        dispatch(addToCart({ id: id, weight: selectedSize, quantity }));
      }}
    >
      Dodaj do koszyka
    </button>
  );
}
