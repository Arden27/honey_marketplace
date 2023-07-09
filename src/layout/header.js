import React from "react";
import Image from "next/image";

export default function Header() {
	return (
		<header className="header " >
			<div className="nav-bar">
				<div className="nav-bar__1 ">
					<input type="checkbox" id="burger-btn__input" className="burger-btn__input" />

					<label htmlFor="burger-btn__input" className="burger-btn">
						<div className="burger-btn__box">
							<div className="burger-btn__bars"></div>
						</div>
					</label>

					<nav className="nav">					
						<ul className="nav__items">
							<ul className="nav__item nav__item__shop">
								<a href="">SKLEP</a>
								<li className="nav__item__shop__item">
									<a href="">Promocje</a>
								</li>
								<li className="nav__item__shop__item">
									<a href="">Miody</a>
								</li>
								<li className="nav__item__shop__item">
									<a href="">Produkty pszczele</a>
								</li>
								<li className="nav__item__shop__item">
									<a href="">Świece</a>
								</li>
								<li className="nav__item__shop__item">
									<a href="">Zestawy</a>
								</li>
							</ul>
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
				</div>

				<div className="logo">
					<div className="logo--shadow"></div>

					<Image
        				src="/img/test.png"
        				width={80}
        				height={80}
      		  			alt="Logo pasieki Kurpiowski Bartnik"
     				 />
				</div>

				<div className="nav-bar__2">
					<button className="search-btn">SZUKAJ</button>
					<button className="user-btn">USER</button>
					<button className="cart-btn">KOSZYK</button>
				</div>
			</div>

			<div className="shop-menu">
				<div className="shop-menu__item">
					
					Promocje
					
				</div>
				<div className="shop-menu__item">
					
					Miody
					
				</div>
				<div className="shop-menu__item">
					
					Produkty Pszczele
					
				</div>
				<div className="shop-menu__item">
					
					Świece
					
				</div>
				<div className="shop-menu__item">
					
					Zestawy
					
				</div>
			</div>
		</header>
	);
}
