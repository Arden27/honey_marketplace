import dynamic from "next/dynamic";

const ShopRadioButton = dynamic(() => import("@/app/sklep/_shopComponents/ShopRadioButton"), {
  ssr: false,
});

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
