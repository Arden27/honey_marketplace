"use client"
import Link from "next/link";

import ShopMenu from "@/components/shop-menu";
import FilterItemsBtn from "@/components/filter-items-btn";
import ShopItem from "./shop-item";
import Pagination from "@/components/pagination";

import BottomBox from "@/components/bottom-box";

import { useDispatch } from 'react-redux';
import { setItems } from "@/redux/store";
import { useEffect } from "react";

// export const metadata = {
//   title: "Sklep - Kurpiowski Bartnik",
//   description: "OPIS",
//   keywords: "TAGI",
// };

export default function Shop() {
	const dispatch = useDispatch();

	const items = [
		{
			id: 1,
			name: "Miód rzepakowy",
			image: "/img/home/jak-rozpoznac.jpg",
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
    <main className="">
      <ShopMenu />
      <section
        className="mx-auto mb-gap grid w-[calc(100%-2*theme(spacing.md))] max-w-screen-2xl grid-cols-1 grid-rows-[auto_1fr_auto] gap-gap overflow-hidden rounded-[3rem] bg-shop-bg p-gap
        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div className="col-span-full flex items-center justify-between">
          <div>PANEL</div>
          <FilterItemsBtn />
        </div>

		{items.map((item) => (
			<ShopItem key={item.id} item={item} />
		))}

        <Pagination />
      </section>
    </main>
  );
}
