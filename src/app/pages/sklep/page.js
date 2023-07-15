import Hero from "../components/home/hero";
import HowTo from "../components/home/how-to";
import Description from "../components/home/description";
import Register from "../components/home/register";
import RecomendedBar from "../components/home/recomended-bar.js";
import ArticlesBar from "../components/home/articles-bar";


export const metadata = {
	title: "Sklep - Kurpiowski Bartnik",
	description: "OPIS",
	keywords: "TAGI",
};

export default function Shop() {
	return (
		<main className="main shop">
			<div className="page-wrapper shop__1">

			</div>

				
			<div className="page-wrapper shop__2">
				<Register />
				<RecomendedBar />
				<ArticlesBar />
			</div>
			
		</main>
	);
}
