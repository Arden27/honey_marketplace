import React from "react";

import Image from "next/image";



export default function Header() {
	return (
		<header className="header">

			<div className="nav-bar-1">

				<input type="checkbox" id="burger-btn__input" className="burger-btn__input nav__item" />

				<label htmlFor="burger-btn__input" className="burger-btn">
					<div className="burger-btn__box">
						<div className="burger-btn__bars"></div>
					</div>
				</label>




				<nav className="nav">					
					<ul className="nav__items">
						<li className="nav__item nav__items__shop">
							<a href="">SKLEP</a>
						</li>
						<li className="nav__item nav__items__about">
							<a href="">O NAS</a>
						</li>
						<li className="nav__item nav__items__articles">
							<a href="">ARTYKUŁY</a>
						</li>
						<li className="nav__item nav__items__faq">
							<a href="">FAQ</a>
						</li>
						<li className="nav__item nav__items__contact">
							<a href="">KONTAKT</a>
						</li>
					</ul>
				</nav>




			</div>

			<div className="logo">
				<Image
        			src="/img/test.png"
        			width={90}
        			height={90}
        			alt="Logo pasieki Kurpiowski Bartnik"
     			 />
			</div>

			<div className="nav-bar-2">
				<button className="search-btn">SZUKAJ</button>
				<button className="user-btn">USER</button>
				<button className="cart-btn">KOSZYK</button>
			</div>

			<div className="shop-menu">
				<div className="shop-menu__item">PROMOCJE</div>
				<div className="shop-menu__item">MIODY</div>
				<div className="shop-menu__item">PRODUKTY PSZCZELE</div>
				<div className="shop-menu__item">ŚWIECE</div>
				<div className="shop-menu__item">ZESTAWY</div>
			</div>
		</header>
	);
}
