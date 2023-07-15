import Hero from "../components/home/hero";
import HowTo from "../components/home/how-to";
import Description from "../components/home/description";
import Register from "../components/home/register";
import Recomended from "../components/home/recomended.js";
import ArticlesBar from "../components/home/articles-bar";


export const metadata = {
	title: "Kurpiowski Bartnik",
	description: "OPIS",
	keywords: "TAGI",
};

export default function Home() {
	return (
		<main className="page-wrapper main home">
				<Hero />
				<HowTo />
				<Description />
				<Register />
				<Recomended />
				<ArticlesBar />
			
		</main>
	);
}
