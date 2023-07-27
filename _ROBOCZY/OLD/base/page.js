import Image from "next/image";

import Register from "../../components/register-bar.js";
import RecomendedBar from "../../components/recomended-bar.js";
import ArticlesBar from "./articles-bar.js";

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
  return (
    <main className="page-wrapper main shop">
      <div className="shop__1">
        <div className="shop__panel ">
          <h1 className="shop__panel__category ">Sklep / Miody</h1>
          <button className="button shop__panel__sort-btn">Sortuj</button>
        </div>
        <div className="shop__item">
          <Image
            className="shop__item__img "
            src="/img/home/jak-rozpoznac.jpg"
            width={1000}
            height={1000}
            alt="Nazwa produktu"
          />

          <div className="shop__item__content-wrapper">
            <h2 className="shop__item__content shop__item__content__name">
              Miód rzepakowy
            </h2>

            <div className="shop__item__content__weight-wrapper">
              <button className="button shop__item__content shop__item__content__weight">
                250 g
              </button>
              <button className="button shop__item__content shop__item__content__weight button shop__item__content shop__item__content__weight--active">
                450 g
              </button>
              <button className="button shop__item__content shop__item__content__weight">
                1 kg
              </button>
            </div>

            <div className="shop__item__content shop__item__content__price-wrapper">
              <div className="shop__item__content shop__item__content__price shop__item__content shop__item__content__price--old">
                99,90 zł
              </div>
              <div className="shop__item__content shop__item__content__price shop__item__content shop__item__content__price--new">
                99,90 zł
              </div>
            </div>

            <div className="shop__item__content__add-to-cart">
              <div className="quantity-btn shop__item__content shop__item__content__add-to-cart__quantity-btn">
                <button className="quantity-btn-subtract shop__item__content__add-to-cart__quantity__subtract">
                  -
                </button>
                <input
                  className="quantity-btn-input shop__item__content__add-to-cart__quantity__input"
                  type="number"
                  value="999"
                  min="1"
                />
                <button className="quantity-btn-add shop__item__content__add-to-cart__quantity__add">
                  +
                </button>
              </div>
              <button className="button-big shop__item__content shop__item__content__add-to-cart__btn">
                Dodaj do koszyka
              </button>
            </div>
          </div>
        </div>

        <div className="shop__item">1</div>

        <div className="shop__item">1</div>

        <div className="shop__item">1</div>

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
