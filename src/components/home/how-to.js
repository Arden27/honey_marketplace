import React from "react";
import Image from "next/image";

export default function HowTo() {
	return (
		<section className="how-to">

			<div className="how-to__img">
				<Image
        			src="/img/home/jak-rozpoznacz.jpeg"
        			width={1000}
        			height={1000}
      		  		alt="Koszyk"
     			/>
			</div>
			<div className="how-to__text-wrapper">
			<div className="how-to__text button-big">
				Sprawdź już dziś!
				</div>
			</div>

		
			
		</section>
	);
}
