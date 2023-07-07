import React from "react";


export default function Header() {
	return (
		<header className="header">

			<div className="nav-bar1">

				<input type="checkbox" id="burger-btn__input" className="burger-btn__input nav__item" />

				<label for="burger-btn__input" className="burger-btn">
					<span>BRG</span>
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

			<div className="logo">LOGO</div>

			<div className="nav-bar2">
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
