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
						
						{/* <input type="checkbox" id="burger-btn__input" className="burger-btn__input" />

						<label htmlFor="burger-btn__input" className="burger-btn">
						<div className="burger-btn__box">
							<div className="burger-btn__bars"></div>
						</div>
						</label> */}
						


						
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
			</div>

			<div className="shop-menu-wrapper">
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
			</div>
		</header>
	);
}
