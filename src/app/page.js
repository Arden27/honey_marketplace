import Slider from "../components/home/slider";
import HowTo from "../components/home/how-to";
import Description from "../components/home/description";
import Register from "../components/home/register";
import Recomended from "../components/home/recomended.js";
import ArticlesBar from "../components/home/articles-bar";
import Link from "next/link";
import LoginButton from "@/loginButton";


export const metadata = {
	title: "Kurpiowski Bartnik",
	description: "OPIS",
	keywords: "TAGI",
};

export default function Home() {
	return (
		<main className="main home">
			<div className="main-wrapper home-wrapper">
				<Link href="/login">Login</Link>
				<LoginButton />
				<Slider />
				<HowTo />
				<Description />
				<Register />
				<Recomended />
				<ArticlesBar />
			</div>
		</main>
	);
}
