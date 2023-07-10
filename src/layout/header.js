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

					{/* Burger button do dodania: */}

					{/* <button className="burger-btn">
						<Image
        					src="/icons/menu.svg"
        					width={30}
        					height={30}
      		  				alt="Menu"
     					 />
					</button> */}

					<nav className="nav">					
						<ul className="nav__list">
							<ul className="nav__list__item nav__list__item--shop">
								<a href="">SKLEP</a>
								<li className="nav__list__item--shop__item">
									<a href="">Promocje</a>
								</li>
								<li className="nav__list__item--shop__item">
									<a href="">Miody</a>
								</li>
								<li className="nav__list__item--shop__item">
									<a href="">Produkty pszczele</a>
								</li>
								<li className="nav__list__item--shop__item">
									<a href="">Świece</a>
								</li>
								<li className="nav__list__item--shop__item">
									<a href="">Zestawy</a>
								</li>
							</ul>
							<li className="nav__list__item">
								<a href="">O NAS</a>
							</li>
							<li className="nav__list__item">
								<a href="">ARTYKUŁY</a>
							</li>
							<li className="nav__list__item">
								<a href="">FAQ</a>
							</li>
							<li className="nav__list__item">
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
					<button className="search-btn">
						<Image
        					src="/icons/search.svg"
        					width={30}
        					height={30}
      		  				alt="Szukaj"
     					 />
					</button>
					<button className="user-btn">
						<Image
        					src="/icons/user.svg"
        					width={30}
        					height={30}
      		  				alt="Konto"
     					 />
					</button>
					<button className="cart-btn">
						<Image
        					src="/icons/shopping-cart.svg"
        					width={30}
        					height={30}
      		  				alt="Koszyk"
     					 />
					</button>
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
