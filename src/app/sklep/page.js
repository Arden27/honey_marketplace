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
			{ size: "1 KG", price: 99.9 }
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
		
        {/* <div className="shop">
          {items.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div> */}

        <div className="shop__item">
          <Image
            className="shop__item__img"
            src="/img/home/jak-rozpoznac.jpg"
            width={500}
            height={500}
            alt="Nazwa produktu"
          />

          <div className="shop__item__content-wrapper">
            <h2 className="shop__item__content shop__item__content__name">
              Miód rzepakowy
            </h2>

            <div className="shop__item__content__weight-wrapper">
              <div className="button shop__item__content shop__item__content__weight">
                <input type="radio" id="weight-250" name="weight" value="250" />
                <label htmlFor="weight-250">250 g</label>
              </div>
              <div className="button shop__item__content shop__item__content__weight">
                <input type="radio" id="weight-450" name="weight" value="450" />
                <label htmlFor="weight-450">450 g</label>
              </div>
              <div className="button shop__item__content shop__item__content__weight">
                <input
                  type="radio"
                  id="weight-1000"
                  name="weight"
                  value="1000"
                />
                <label htmlFor="weight-1000">1 kg</label>
              </div>
            </div>

            <div className="shop__item__content shop__item__content__price">
              99,90 zł
            </div>
            <button className="button-big shop__item__content shop__item__content__add-to-cart">
              Dodaj do koszyka
            </button>
          </div>
        </div>

        <div className="shop__item">
          <Image
            className="shop__item__img"
            src="/img/logo.png"
            width={500}
            height={500}
            alt="Nazwa produktu"
          />

          <div className="shop__item__content-wrapper">
            <h2 className="shop__item__content shop__item__content__name">
              Miód rzepakowy
              <br />z nutką gryki
            </h2>

            <div className="shop__item__content__weight-wrapper">
              <button className="button shop__item__content shop__item__content__weight">
                250 g
              </button>
              <button className="button shop__item__content shop__item__content__weight">
                450 g
              </button>
              <button className="button shop__item__content shop__item__content__weight">
                1 kg
              </button>
            </div>

            <div className="shop__item__content shop__item__content__price">
              99,90 zł
            </div>
            <button className="button-big shop__item__content shop__item__content__add-to-cart">
              Dodaj do koszyka
            </button>
          </div>
        </div>

        <div className="shop__item">1</div>
        <div className="shop__item">1</div>
        <div className="shop__item">1</div>

		<ShopItem item={items[0]} />
		<ShopItem item={items[1]} />

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
