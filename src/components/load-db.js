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
            categories: ["miody"]
		},
		{
			id: 2,
			name: "Miód rzepakowy\nz nutką gryki",
			image: "/img/products/honey/honey1.jpeg",
			sizes: [
				{ size: "250 G", price: 59.99 },
				{ size: "450 G", price: 79.99 },
				{ size: "1 KG", price: 99.99, default: true },
			],
            categories: ["miody"]
		},
		{
			id: 3,
			name: "Miód firmowy",
			image: "/img/products/honey/honey2.webp",
			sizes: [
				{ size: "250 G", price: 59.99 },
				{ size: "450 G", price: 79.99, default: true },
				{ size: "1 KG", price: 99.99 },
			],
            categories: ["miody", "promocje"]
		},
        {
			id: 4,
			name: "Miod gorzki",
			image: "/img/products/honey/honey3.webp",
			sizes: [
				{ size: "250 G", price: 49.99 },
				{ size: "450 G", price: 59.99, default: true },
				{ size: "1 KG", price: 69.99 },
			],
            categories: ["miody"]
		},
        {
			id: 5,
			name: "Miod z krowy",
			image: "/img/products/honey/honey4.jpeg",
			sizes: [
				{ size: "250 G", price: 19.99 },
				{ size: "450 G", price: 29.99, default: true },
				{ size: "1 KG", price: 39.99 },
			],
            categories: ["miody"]
		},
        {
			id: 6,
			name: "Bzestaw miodu",
			image: "/img/products/sets/zestaw_miodu5.jpeg",
			sizes: [
				{ size: "450 G", price: 769.99 },
				{ size: "1 KG", price: 1089.99, default: true },
			],
            categories: ["miody", "zestawy"]
		},
        {
			id: 7,
			name: "Zestaw miodu powiększony",
			image: "/img/products/sets/zestaw_miodu2.jpeg",
			sizes: [
				{ size: "250 G", price: 489.99 },
				{ size: "450 G", price: 869.99, default: true },
				{ size: "1 KG", price: 989.99 },
			],
            categories: ["miody", "zestawy", "promocje"]
		},
        {
			id: 8,
			name: "Zestaw miodu",
			image: "/img/products/sets/zestaw_miodu3.jpeg",
			sizes: [
                { size: "250 G", price: 389.99 },
				{ size: "450 G", price: 669.99, default: true },
				{ size: "1 KG", price: 889.99 },
			],
            categories: ["miody", "zestawy"]
		},
        {
			id: 9,
			name: "Elitny zestaw miodu",
			image: "/img/products/sets/zestaw_miodu4.png",
			sizes: [
				{ size: "3 KG", price: 1069.99, default: true },
				{ size: "5 KG", price: 1489.99 },
			],
            categories: ["miody", "zestawy"]
		},
        {
			id: 10,
			name: "Świca oryginalna",
			image: "/img/products/candles/candle1.webp",
			sizes: [
				{ size: "3 KG", price: 15.99, default: true }
			],
            categories: ["swiece"]
		},
        {
			id: 11,
			name: "Świca czarna",
			image: "/img/products/candles/candle2.jpeg",
			sizes: [
				{ size: "3 KG", price: 21.99, default: true }
			],
            categories: ["swiece", "promocje"]
		},
        {
			id: 12,
			name: "Świca prosto z miodu",
			image: "/img/products/candles/candle4.jpeg",
			sizes: [
				{ size: "3 KG", price: 16.99, default: true }
			],
            categories: ["swiece"]
		},
        {
			id: 13,
			name: "Świca podstawowa",
			image: "/img/products/candles/candle3.jpeg",
			sizes: [
				{ size: "3 KG", price: 12.99, default: true }
			],
            categories: ["swiece"]
		},
        {
			id: 14,
			name: "Zestaw świec miodowych",
			image: "/img/products/sets/zestaw_swiec1.jpeg",
			sizes: [
				{ size: "10 szt", price: 35.99 },
				{ size: "25 szt", price: 50.99, default: true },
				{ size: "40 szt", price: 99.99 },
			],
            categories: ["swiece", "zestawy"]
		},
        {
			id: 15,
			name: "Mega miodowy zestaw świec",
			image: "/img/products/sets/zestaw_swiec2.jpeg",
			sizes: [
				{ size: "50 szt", price: 139.99 },
				{ size: "85 szt", price: 249.99, default: true },
				{ size: "130 szt", price: 599.99 },
			],
            categories: ["swiece", "zestawy"]
		},
        {
			id: 16,
			name: "Wosk pszczeli ",
			image: "/img/products/bee_products/bee_product1.jpeg",
			sizes: [
				{ size: "50 szt", price: 139.99 },
				{ size: "85 szt", price: 249.99, default: true },
				{ size: "130 szt", price: 599.99 },
			],
            categories: ["produkty-pszczele"]
		},
		// add more items as needed
	];

	useEffect(() => {
		dispatch(setItems(items));
	  }, []);
}
