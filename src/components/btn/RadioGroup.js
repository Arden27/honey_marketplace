import dynamic from "next/dynamic";

const RadioBtn = dynamic(() => import("@/components/btn/radio-btn"), {
  ssr: false,
});

export default function RadioGroup({item, handleSizeChange, selectedSize}) {
  return (
    <div className="h-2xl  [&>*]:mx-[calc(1/2*theme(spacing.3xs))]">
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
