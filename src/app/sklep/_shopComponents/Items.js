import { useSelector } from "react-redux";
import React, { useMemo } from "react";
import ShopItem from "@/app/sklep/_shopComponents/ShopItem";

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
    case 'Od A do Z':
      sortedItems = [...filteredItems].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Od Z do A':
      sortedItems = [...filteredItems].sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'Od najniższej ceny':
      sortedItems = [...filteredItems].sort((a, b) => a.sizes[0].price - b.sizes[0].price);
      break;
    case 'Od najwyższej ceny':
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
