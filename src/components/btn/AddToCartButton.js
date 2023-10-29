import { addToCart, setShouldCloseCart, openCart } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function AddToCartButton({id, selectedSize, quantity, className}) {
	const dispatch = useDispatch();

  return (
    <button
      className={className}
      //className="btn-lg hover:text-shop-item overflow-ellipsis whitespace-break-spaces  border-text pl-[calc(theme(spacing.3xl))] pr-2xs hover:text-bg3 focus:text-bg3 315px:pl-[calc(theme(spacing.3xl)+theme(spacing.sm))]  315px:pr-md"
      onClick={() => {
        dispatch(setShouldCloseCart(false));
        // console.log("after click on Dodaj", shouldCloseCart)
        dispatch(addToCart({ id: id, weight: selectedSize, quantity }));
        dispatch(openCart());

        setTimeout(() => {
          dispatch(setShouldCloseCart(true)); // allow cart to close after a short delay
          // console.log("timeout shouldCloseCart set to: ", shouldCloseCart)
        }, 500);
      }}
    >
      Dodaj do koszyka
    </button>
  );
}
