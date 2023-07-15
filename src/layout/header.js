import React from "react";
import Image from "next/image";

import NavBar from "../components/header/nav-bar";
import ShopMenu from "../components/header/shop-menu";

export default function Header() {
	return (
		
		<header className="header">


			<NavBar />

			


			<div className="header-bar">
				<div className="page-wrapper header-bar-wrapper">
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
							{/* <Image
        						src="/icons/search.svg"
        						width={25}
        						height={25}
      		  					alt="Szukaj"
     					 	/> */}
							<svg 
								width="25"
								height="25"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							</svg>
							
						</button>
						
						<button className="button user-btn">
							<svg
								width="25"
								height="25"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								
								<circle cx="12" cy="7" r="4"></circle>
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							</svg>
						</button>
						<button className="button cart-btn">
							<svg 
								width="25"
								height="25"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="9" cy="21" r="1"></circle>
								<circle cx="20" cy="21" r="1"></circle>
								<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
							</svg>
						</button>
					</div>			
				</div>
			</div>

			<ShopMenu />

		</header>
	);
}
