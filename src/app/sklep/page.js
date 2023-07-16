


import Register from "../../components/register-bar.js";
import RecomendedBar from "../../components/recomended-bar.js";
import ArticlesBar from "../../components/articles-bar.js";


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
