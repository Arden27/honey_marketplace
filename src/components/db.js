"use client"
import ShopItem from "@/components/box/shop-item";

import { useDispatch, useSelector } from 'react-redux';
import React from "react";

export default function DB() {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.items)

  return (
    <React.Fragment>
        {items.map((item) => (
            <ShopItem key={item.id} item={item} />
        ))}
    </React.Fragment>
  );
}
