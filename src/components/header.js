import React from "react";

export default function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<ul className="nav__items">
					<li className="nav__item">
						<a href="shop.html">SKLEP</a>
					</li>
					<li className="nav__item">
						<a href="about.html">O NAS</a>
					</li>
					<li className="nav__item">
						<a href="articles.html">ARTYKUŁY</a>
					</li>
					<li className="nav__item">
						<a href="faq.html">FAQ</a>
					</li>
					<li className="nav__item">
						<a href="contact.html">KONTAKT</a>
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
