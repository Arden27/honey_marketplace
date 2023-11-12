import ShopRadioButton from "./ShopRadioButton";

export default function ShopRadioGroup({item, handleSizeChange, selectedSize, className}) {
  return (
    <div className={className}>
      {item.sizes.map((sizeObj, index) => (
        <ShopRadioButton
          key={index}
          sizeObj={sizeObj}
          item={item}
          handleSizeChange={handleSizeChange}
          selectedSize={selectedSize}
        />
      ))}
    </div>
  );
}
