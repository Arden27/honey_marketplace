import React from "react";
import Image from "next/image";

export default function HowTo() {
	return (
		<section className="how-to">
			
				<Image
					className="how-to__img"
        			src="/img/home/jak-rozpoznacz.jpeg"
        			width={500}
        			height={500}
      		  		alt="Koszyk"

     			/>
			
			<div className="how-to__btn-wrapper">
				<a className="how-to__btn button-big">Sprawdź już dziś!</a>
			</div>
		</section>
	);
}
