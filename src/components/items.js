import { useSelector } from "react-redux";
import React, { useMemo } from "react";
import ShopItem from "@/app/sklep/shop-item";

export default function Items({ sortType, category }) {
  const items = useSelector((state) => state.items);

  const filteredItems = useMemo(() => {
    if (!category) return items;

    return items.filter(item => 
      item.categories.includes(category)
    );
  }, [items, category]);

  let sortedItems;

  switch (sortType) {
    case 'A-Z':
      sortedItems = [...filteredItems].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Z-A':
      sortedItems = [...filteredItems].sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'By price from lowest':
      sortedItems = [...filteredItems].sort((a, b) => a.sizes[0].price - b.sizes[0].price);
      break;
    case 'By price from highest':
      sortedItems = [...filteredItems].sort((a, b) => b.sizes[0].price - a.sizes[0].price);
      break;
    default:
      sortedItems = filteredItems;
  }
  
  return (
    <React.Fragment>
      {sortedItems.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </React.Fragment>
  );
}
