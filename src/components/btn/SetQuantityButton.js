export default function SetQuantityButton({
  quantity,
  setQuantity,
  direction,
  className
}) {
  const handleClick = () => {
    if (direction === "plus" && quantity < 99) {
      setQuantity(Math.round(quantity + 1));
    } else if (direction === "minus" && quantity > 1) {
      setQuantity(Math.round(quantity - 1));
    }
  };

  return (
    <button
    //   className="mr-3xs h-md w-md justify-center rounded-[2rem] text-center font-btn leading-none 
		// hover:bg-text hover:text-bg3 focus:bg-text focus:text-bg3"
      // className="ml-3xs h-sm w-sm justify-center rounded-[2rem] text-center font-btn leading-none 
      // hover:bg-text hover:text-bg"
      className={className}
      onClick={handleClick}
    >
      {direction === "plus" ? "+" : "-"}
    </button>
  );
}
