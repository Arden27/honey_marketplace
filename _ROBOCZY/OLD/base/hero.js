import React from "react";
import Image from "next/image";


import TwitterIcon from "./icons/menu.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <Image
          src="/img/home/hero.png"
          width={500}
          height={500}
          alt="Koszyk"
          className="how-to__img"
        />
      </div>
      <div className="how-to__btn-wrapper">
        <a className="how-to__btn button-big">Przejdź do sklepu</a>
      </div>
    </section>
  );
}
