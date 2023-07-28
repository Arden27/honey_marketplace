"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
// import RadioButton from "./radio-button";

import dynamic from "next/dynamic";

const RadioButton = dynamic(() => import("./radio-button"), { ssr: false });

function ShopItem({ item }) {
	// Find the default size object
	const defaultSize = item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1]; // Fallback to first size if no default found

	// Initialize state to store the currently selected size and price
	const [selectedSize, setSelectedSize] = useState(defaultSize.size);
	const [selectedPrice, setSelectedPrice] = useState(defaultSize.price);
	const [quantity, setQuantity] = useState(1);

	const handleSizeChange = (size, price) => {
		setSelectedSize(size);
		setSelectedPrice(price);
	};

	return (
		<section className="grid h-[calc(theme(spacing.header-bar-lg)+3rem)] min-h-[50rem] grid-cols-1 grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[3rem] bg-shop-item-bg">
			<Image
				className="h-full w-full object-cover object-center"
				src={item.image}
				width={100}
				height={100}
				alt={item.name}
			/>

			<div className="grid grid-cols-1 grid-rows-[theme(spacing.2xl)_theme(spacing.3xl)_theme(spacing.2xl)_auto] items-center justify-items-center p-gap ">
				<h2 className="text-center">{item.name}</h2>

				<div className="flex">
					{item.sizes.map((sizeObj, index) => (
						<RadioButton
							key={index}
							sizeObj={sizeObj}
							item={item}
							handleSizeChange={handleSizeChange}
							selectedSize={selectedSize}
						/>
					))}
				</div>

				<div className="flex">
					<div className="mx-xs text-warning line-through">
						<h3>{selectedPrice} zł</h3>
					</div>
					<div className="mx-xs">
						<h3>{selectedPrice} zł</h3>
					</div>
				</div>

				<div className="relative flex rounded-[3rem]">
					<div
						className="absolute flex h-btn-lg items-center justify-items-center rounded-[3rem] border-2 border-text bg-shop-item-bg
					"
					>
						<button
							className="ml-3xs h-md w-md justify-center rounded-[3rem] text-center font-btn leading-none 
							hover:bg-text hover:text-bg"
							onClick={() => quantity > 1 && setQuantity(Math.round(quantity - 1))}
							>
							-
						</button>
						<input
							className="h-xl w-xl rounded-[3rem] bg-transparent text-center font-btn text-sm"
							type="number"
							value={(quantity).toString()}
							min="1"
							max="99"
							step="1"
							onChange={e => {
								const value = Math.round(Number(e.target.value));
								if (value < 1) {
									setQuantity(1);
								} else if (value > 99) {
									setQuantity(99);
								} else {
									setQuantity(value);
								}
							}}
						/>
						<button
							className="mr-3xs h-md w-md justify-center rounded-[3rem] text-center font-btn leading-none 
							hover:bg-text hover:text-bg"
							onClick={() => quantity < 99 && setQuantity(Math.round(quantity + 1))}
							>
							+
						</button>
					</div>
					<button className="btn-lg pl-[calc(theme(spacing.xl)+2*theme(spacing.md)+2*theme(spacing.3xs)+theme(spacing.md))] border-text hover:text-shop-item-bg">
						Dodaj do koszyka
					</button>
				</div>
			</div>
		</section>
	);
}

export default ShopItem;