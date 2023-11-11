import React from "react";
import Button from "@/components/Button";

function ShopRadioButton({ sizeObj, item, handleSizeChange, selectedSize }) {
  return (
    <React.Fragment>
      <input
        type="radio"
        id={`weight-${sizeObj.size}-${item.id}`}
        name={`weight-${item.id}`}
        value={sizeObj.size}
        onChange={() => handleSizeChange(sizeObj.size, sizeObj.price)}
        checked={sizeObj.size === selectedSize}
        className="sr-only"
      />
      <label
        htmlFor={`weight-${sizeObj.size}-${item.id}`}
        className={` ${
          sizeObj.size === selectedSize ? "border-text" : "border-transparent"
        }`}
      >
        {/* ARTEM - Nadal jest schrzanione, nie moge ustawić wysokości labela, chociaż wcześniej mogłem.. no dziwne coś tu jest i nie wiem co */}

        <Button className="" format="sm">
          {sizeObj.size}
        </Button>
      </label>
    </React.Fragment>
  );
}

export default ShopRadioButton;

// na tych starych stylach niby dzialało, a teraz nie działa:.btn-sm {
//     @apply flex h-[calc(theme(spacing.lg)+theme(spacing.3xs))] items-center justify-center rounded-[2rem] border-2 border-solid border-transparent p-xs font-btn text-sm uppercase text-text transition-colors duration-300 ease-in-out [&>*]:duration-300 [&>*]:ease-in-out;
//   }
