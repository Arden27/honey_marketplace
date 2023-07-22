import Image from "next/image";

import Register from "../../components/register-bar.js";
import RecomendedBar from "../../components/recomended-bar.js";
import ArticlesBar from "../../components/articles-bar.js";
import ShopItem from "./shop-item.js";

export const metadata = {
  title: "Sklep - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Shop() {
	const items = [
		{
		  id: 1,
		  name: "Miód rzepakowy",
		  image: "/img/home/jak-rozpoznac.jpg",
		  sizes: [
			{ size: "250 G", price: 59.9 },
			{ size: "450 G", price: 79.9, default: true },
			{ size: "1 KG", price: 99.9 }
		  ],
		},
		{
		  id: 2,
		  name: "Miód rzepakowy\nz nutką gryki",
		  image: "/img/logo.png",
		  sizes: [
			{ size: "250 G", price: 59.9 },
			{ size: "450 G", price: 79.9 },
			{ size: "1 KG", price: 99.9, default: true }
		  ],
		},
		// add more items as needed
	];
	

  return (
    <main className="page-wrapper main shop">
      <div className="shop__1">
        <div className="shop__panel">
          <h1 className="shop__panel__category">Sklep / Miody</h1>
          <button className="button shop__panel__sort-btn">Sortuj</button>
        </div>
		
        
          {items.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}

        <button className="shop__page-btn">sdasdadsasdasdadsa</button>
      </div>

      <div className="shop__2">
        <Register />
        <RecomendedBar />
        <ArticlesBar />
      </div>
    </main>
  );
}
