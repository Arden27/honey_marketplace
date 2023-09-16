"use client"

import { useDispatch } from 'react-redux';
import { setItems } from "@/redux/store";
import { useEffect } from "react";

export default function LoadDB() {
	const dispatch = useDispatch();

	const items = [
		{
			id: 1,
			name: "Miód rzepakowy",
			image: "/img/boxes/jak-rozpoznac.jpg",
			sizes: [
				{ size: "250 G", price: 59.99 },
				{ size: "450 G", price: 79.99, default: true },
				{ size: "1 KG", price: 99.99 },
			],
		},
		{
			id: 2,
			name: "Miód rzepakowy\nz nutką gryki",
			image: "/img/logo.png",
			sizes: [
				{ size: "250 G", price: 59.99 },
				{ size: "450 G", price: 79.99 },
				{ size: "1 KG", price: 99.99, default: true },
			],
		},
		{
			id: 3,
			name: "Miód rzepakowy\nz nutką gryki",
			image: "/img/logo.png",
			sizes: [
				{ size: "250 G", price: 59.99 },
				{ size: "450 G", price: 79.99 },
				{ size: "1 KG", price: 99.99 },
			],
		},
        {
			id: 4,
			name: "Aiód rzepakowy\nz nutką gryki",
			image: "/img/logo.png",
			sizes: [
				{ size: "250 G", price: 2359.99 },
				{ size: "450 G", price: 79.99 },
				{ size: "1 KG", price: 99.99 },
			],
		},
        {
			id: 5,
			name: "ZAiód rzepakowy\nz nutką gryki",
			image: "/img/logo.png",
			sizes: [
				{ size: "250 G", price: 19.99 },
				{ size: "450 G", price: 79.99 },
				{ size: "1 KG", price: 99.99 },
			],
		},
		// add more items as needed
	];

	useEffect(() => {
		dispatch(setItems(items));
	  }, []);
}
