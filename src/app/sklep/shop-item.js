"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
// import RadioButton from "./radio-button";

import dynamic from "next/dynamic";

const RadioButton = dynamic(() => import("./radio-button"), { ssr: false });

function ShopItem({ item }) {
	// Find the default size object
	const defaultSize = item.sizes.find((sizeObj) => sizeObj.default) || item.sizes[1]; // Fallback to first size if no default found
	console.log("Default size:", defaultSize); // Logging default size

	// Initialize state to store the currently selected size and price
	const [selectedSize, setSelectedSize] = useState(defaultSize.size);
	const [selectedPrice, setSelectedPrice] = useState(defaultSize.price);

	// Log selectedSize and selectedPrice on each render
	useEffect(() => {
		console.log("Current selected size:", selectedSize);
		console.log("Current selected price:", selectedPrice);
	}, [selectedSize, selectedPrice]);

	const handleSizeChange = (size, price) => {
		console.log("Changing size to:", size, "and price to:", price); // Log new size and price
		setSelectedSize(size);
		setSelectedPrice(price);
	};

	return (
		<div className="shop__item">
			<Image
				className="h-full w-full object-cover object-center"
				src={item.image}
				width={500}
				height={500}
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
						<h3>{selectedPrice * 1.1} zł</h3>
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
							>
							-
						</button>
						<input
							className="h-xl w-xl rounded-[3rem] bg-transparent text-center font-btn text-sm"
							type="number"
							defaultValue="1"
							min="1"
							max="99"
						/>
						<button
							className="mr-3xs h-md w-md justify-center rounded-[3rem] text-center font-btn leading-none 
							hover:bg-text hover:text-bg"
							>
							+
						</button>
					</div>
					<button className="btn-lg pl-[calc(theme(spacing.xl)+2*theme(spacing.md)+2*theme(spacing.3xs)+theme(spacing.md))] border-text hover:text-shop-item-bg">
						Dodaj do koszyka
					</button>
				</div>
			</div>
		</div>
	);
}

export default ShopItem;