import React from "react";

function RadioButton({ sizeObj, item, handleSizeChange, selectedSize }) {
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
				className={`btn-sm cursor-pointer hover:text-shop-item ${
					sizeObj.size === selectedSize
					  ? "text-text border-text"
					  : "text-text border-transparent"
				  }`}
			>
				{sizeObj.size}
			</label>
		</React.Fragment>
	);
}

export default RadioButton;
