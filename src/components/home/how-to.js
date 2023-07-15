import React from "react";
import Image from "next/image";

export default function HowTo() {
	return (
		<section className="how-to">
			
				<Image
        			src="/img/home/jak-rozpoznacz.jpeg"
        			width={500}
        			height={500}
      		  		alt="Koszyk"
					className="how-to--img"
     			/>
			
			<div className="how-to--btn-wrapper">
				<a className="how-to--btn button-big">Sprawdź już dziś!</a>
			</div>
		</section>
	);
}
