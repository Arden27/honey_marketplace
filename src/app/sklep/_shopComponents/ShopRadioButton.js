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
        className={`hover:text-shop-item ${
          sizeObj.size === selectedSize
            ? "text-text [&>*]:border-text"
            : "text-text [&>*]:border-transparent"
        }`}
      >

{/* ARTEM - Przy próbie implementacji buttona, przestaje działać funkcja. Czy to powinno być na inpututach i labelach na pewno? Jakoś mi to nie pasuje. No komponentu głupiego brakuje */}

        {/* <Button className="" type="sm">
          {sizeObj.size}
        </Button> */}

        {sizeObj.size}
      </label>
    </React.Fragment>
  );
}

export default ShopRadioButton;
