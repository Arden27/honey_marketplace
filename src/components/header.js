import React from "react";

export default function Header() {
	return (
		<header className="header">


			<button class="burger-btn">
				<div class="burger-btn__box">
					<div class="burger-btn__bars"></div>
				</div>
				sdsd
			</button>

			<nav className="nav">
				<ul className="nav__items">
					<li className="nav__item">
						<a href="">SKLEP</a>
					</li>
					<li className="nav__item">
						<a href="">O NAS</a>
					</li>
					<li className="nav__item">
						<a href="">ARTYKUŁY</a>
					</li>
					<li className="nav__item">
						<a href="">FAQ</a>
					</li>
					<li className="nav__item">
						<a href="">KONTAKT</a>
					</li>
				</ul>
			</nav>

			









			<div className="logo">LOGO</div>

			<div className="nav2">
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
