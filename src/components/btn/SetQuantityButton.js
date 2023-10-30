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
      className={className}
      onClick={handleClick}
    >
      {direction === "plus" ? "+" : "-"}
    </button>
  );
}
