export default function InputQuantity({ quantity, setQuantity }) {

  const handleChange = (e) => {
    const value = Math.round(Number(e.target.value));
    if (value < 1) {
      setQuantity(1);
    } else if (value > 99) {
      setQuantity(99);
    } else {
      setQuantity(value);
    }
  };

  return (
    <input
      className="h-lg w-lg rounded-[2rem] bg-transparent text-center font-btn text-sm"
      type="number"
      value={quantity.toString()}
      min="1"
      max="99"
      step="1"
      onChange={handleChange}
    />
  );
}
