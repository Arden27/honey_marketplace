import React from "react";
import Image from "next/image";

import NavBar from "../components/nav-bar";

export default function Header() {
	return (
		
		<header className="header">


			<NavBar />

			


			<div className="header-bar">
				<div className="header-bar-wrapper">
					<div className="header-bar__1 ">

					</div>

					<div className="logo">
						<div className="logo--shadow"></div>
						
						<Image
        					src="/img/logo.png"
        					width={80}
        					height={80}
      		  				alt="Logo pasieki Kurpiowski Bartnik"
     					 />
						 
					</div>

					<div className="header-bar__2">
						<button className="button search-btn">
							<Image
        						src="/icons/search.svg"
        						width={25}
        						height={25}
      		  					alt="Szukaj"
     					 	/>
						</button>
						<button className="button user-btn">
							<Image
        						src="/icons/user.svg"
        						width={25}
        						height={25}
      		  					alt="Konto"
     					 	/>
						</button>
						<button className="button cart-btn">
							<Image
        						src="/icons/shopping-cart.svg"
        						width={25}
        						height={25}
      		  					alt="Koszyk"
     						 />
						</button>
					</div>			
				</div>
			</div>

			<div className="shop-menu-wrapper">
				<div className="shop-menu">

					<div className="shop-menu__item">
						<div className="shop-menu__item__img shop-menu__item__img--sale"></div>
						<h2 className="shop-menu__item__text">Promocje</h2>
					</div>

					<div className="shop-menu__item">
						<div className="shop-menu__item__img shop-menu__item__img--honey"></div>
						<h2 className="shop-menu__item__text">Miody</h2>					
					</div>

					<div className="shop-menu__item">	
						<div className="shop-menu__item__img shop-menu__item__img--bee-products"></div>				
						<h2 className="shop-menu__item__text">Produkty Pszczele</h2>					
					</div>

					<div className="shop-menu__item">	
						<div className="shop-menu__item__img shop-menu__item__img--candles"></div>				
						<h2 className="shop-menu__item__text">Świece</h2>			
					</div>

					<div className="shop-menu__item">
						<div className="shop-menu__item__img shop-menu__item__img--sets"></div>				
						<h2 className="shop-menu__item__text">Zestawy</h2>					
					</div>
				</div>				
			</div>
		</header>
	);
}
