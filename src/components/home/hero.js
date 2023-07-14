import React from "react";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="hero">
			<div>
				<Image
        			src="/img/home/hero.png"
        			width={500}
        			height={500}
      		  		alt="Koszyk"
					className="how-to--img"
     			/>
			</div>
			<div className="how-to--text-wrapper">
				<button className="how-to--text button-big">Przejdź do sklepu</button>
			</div>
		</section>
	);
}
