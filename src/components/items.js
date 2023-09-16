import { useSelector } from "react-redux";
import React from "react";
import ShopItem from "@/components/box/shop-item";

export default function Items({ sortType }) {
  const items = useSelector((state) => state.items);
  
  let sortedItems;

  switch (sortType) {
    case 'A-Z':
      sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Z-A':
      sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'By price from lowest':
      sortedItems = [...items].sort((a, b) => a.sizes[0].price - b.sizes[0].price);
      break;
    case 'By price from highest':
      sortedItems = [...items].sort((a, b) => b.sizes[0].price - a.sizes[0].price);
      break;
    default:
      sortedItems = items;
  }
  
  return (
    <React.Fragment>
      {sortedItems.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </React.Fragment>
  );
}
