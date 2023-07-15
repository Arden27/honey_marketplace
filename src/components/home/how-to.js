import React from "react";
import Image from "next/image";

export default function HowTo() {
	return (
		<section className="how-to">
			<div >
				<Image
        			src="/img/home/jak-rozpoznacz.jpeg"
        			width={500}
        			height={500}
      		  		alt="Koszyk"
					className="how-to--img"
     			/>
			</div>
			<div className="how-to--text-wrapper">
				<a className="how-to--text button-big">Sprawdź już dziś!</a>
			</div>
		</section>
	);
}
