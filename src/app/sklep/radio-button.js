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
				className={`px-4 py-2 uppercase text-sm font-medium border-2 rounded-md cursor-pointer ${
					sizeObj.size === selectedSize
					  ? "bg-black text-white border-black"
					  : "text-black border-transparent"
				  }`}
			>
				{sizeObj.size}
			</label>
		</React.Fragment>
	);
}

export default RadioButton;
