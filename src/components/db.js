"use client"
import ShopItem from "@/components/shop-item";

import { useDispatch } from 'react-redux';
import { setItems } from "@/redux/store";
import React, { useEffect } from "react";

export default function DB() {
	const dispatch = useDispatch();

	const items = [
		{
			id: 1,
			name: "Miód rzepakowy",
			image: "/img/boxes/jak-rozpoznac.jpg",
			sizes: [
				{ size: "250 G", price: 59.9 },
				{ size: "450 G", price: 79.9, default: true },
				{ size: "1 KG", price: 99.9 },
			],
		},
		{
			id: 2,
			name: "Miód rzepakowy\nz nutką gryki",
			image: "/img/logo.png",
			sizes: [
				{ size: "250 G", price: 59.9 },
				{ size: "450 G", price: 79.9 },
				{ size: "1 KG", price: 99.9, default: true },
			],
		},
		{
			id: 3,
			name: "Miód rzepakowy\nz nutką gryki",
			image: "/img/logo.png",
			sizes: [
				{ size: "250 G", price: 59.9 },
				{ size: "450 G", price: 79.9 },
				{ size: "1 KG", price: 99.9 },
			],
		},
		// add more items as needed
	];

	useEffect(() => {
		dispatch(setItems(items));
		console.log(items)
	  }, []);

  return (
    <React.Fragment>
        {items.map((item) => (
            <ShopItem key={item.id} item={item} />
        ))}
    </React.Fragment>
  );
}
