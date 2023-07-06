import React from "react";

import Slider from "./components/slider";
import HowTo from "./components/how-to";
import Description from "./components/description";
import Register from "./components/register";
import Favourites from "./components/favourites";
import Articles from "./components/articles";

export default function Home() {
	return (
		<main className="home">
			<Slider />
			<HowTo />
			<Description />
			<Register />
			<Favourites />
			<Articles />
		</main>
	);
}

// adcsad
