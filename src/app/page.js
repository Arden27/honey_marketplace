import Hero from "../components/home/hero";
import HowTo from "../components/home/how-to";
import Description from "../components/home/description";
import Register from "../components/register";
import RecomendedBar from "../components/home/recomended-bar.js";
import ArticlesBar from "../components/articles-bar";


export const metadata = {
	title: "Kurpiowski Bartnik",
	description: "OPIS",
	keywords: "TAGI",
};

export default function Home() {
	return (
		<main className="main home">
			<div className="page-wrapper home__1">
				<Hero />
				<HowTo />
			</div>

			<Description />
				
			<div className="page-wrapper home__2">
				<Register />
				<RecomendedBar />
				<ArticlesBar />
			</div>
			
		</main>
	);
}
