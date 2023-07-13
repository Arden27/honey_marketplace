import React from "react";
import Image from "next/image";

export default function HowTo() {
	return (
		<section className="how-to">
			<div className="how-to-wrapper"></div>
			<div className="how-to__img">
				<Image
        			src="/img/home/jak-rozpoznac.png"
        			width={1000}
        			height={1000}
      		  		alt="Koszyk"
     			/>
			</div>
			<div className="how-to__text">
				<h2>Jak poznać prawdziwy miód?</h2>
			</div>
			
		</section>
	);
}
