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
      >
        <Button
          className={`cursor-pointer hover:text-bg3 ${
            sizeObj.size === selectedSize ? "" : "border-transparent"
          }`}
          format="sm"
          label
        >
          {sizeObj.size}
        </Button>
      </label>
    </React.Fragment>
  );
}

export default ShopRadioButton;
