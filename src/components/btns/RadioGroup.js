import dynamic from "next/dynamic";

const RadioBtn = dynamic(() => import("@/components/btns/RadioBtn"), {
  ssr: false,
});

export default function RadioGroup({item, handleSizeChange, selectedSize, className}) {
  return (
    <div className={className}>
      {item.sizes.map((sizeObj, index) => (
        <RadioBtn
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
