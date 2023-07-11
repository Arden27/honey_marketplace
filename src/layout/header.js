import React from "react";
import Image from "next/image";
import BurgerMenu from "./burgerMenu";

export default function Header() {
	return (
		<header className="header " >
			
			<div className="nav-bar">
				<div className="nav-bar__1 ">
					<BurgerMenu />
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
