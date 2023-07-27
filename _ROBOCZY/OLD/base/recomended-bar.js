import React from "react";
import Image from "next/image";

export default function RecomendedBar() {
  return (
    <section className="recomended-bar">
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
          <button className="button-big shop__item__content shop__item__content__add-to-basket">
            Dodaj do koszyka
          </button>
        </div>
      </div>
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
          <button className="button-big shop__item__content shop__item__content__add-to-basket">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </section>
  );
}
