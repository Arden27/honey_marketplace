import Image from "next/image";

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
		<main className="page-wrapper main shop">
			<div className="shop__1">
				<div className="shop__item">
					<Image
						className="shop__item__img"
						src="/img/logo.png"
						width={500}
						height={500}
						alt="Nazwa produktu"
					/>

					<div className="shop__item__content-wrapper">
						<h2 className="shop__item__content shop__item__content__name">
							Miód rzepakowy<br />
							z nutką gryki
						</h2>

						<div className="shop__item__content__type-wrapper">
							<button className="button shop__item__content shop__item__content__weight">
								250 g
							</button>
							<button className="button shop__item__content shop__item__content__weight">
								450 g
							</button>
							<button className="button shop__item__content shop__item__content__weight">
								1 kg
							</button>
						</div>

						<div className="shop__item__content shop__item__content__price">
							99,90 zł
						</div>
						<button className="button-big shop__item__content shop__item__content__type">
							Dodaj do koszyka
						</button>
					</div>
				</div>

				<div className="shop__item">
					<Image
						className="shop__item__img"
						src="/img/logo.png"
						width={500}
						height={500}
						alt="Nazwa produktu"
					/>

					<div className="shop__item__content-wrapper">
						<h2 className="shop__item__content shop__item__content__name">
							Miód gryczany
						</h2>

						<div className="shop__item__content__type-wrapper">
							<button className="button shop__item__content shop__item__content__weight">
								250 g
							</button>
							<button className="button shop__item__content shop__item__content__weight">
								450 g
							</button>
							<button className="button shop__item__content shop__item__content__weight">
								1 kg
							</button>
						</div>

						<div className="shop__item__content shop__item__content__price">
							99,90 zł
						</div>
						<button className="button-big shop__item__content shop__item__content__type">
							Dodaj do koszyka
						</button>
					</div>
				</div>

				<div className="shop__item">1</div>
				<div className="shop__item">1</div>
				<div className="shop__item">1</div>
				<div className="shop__item">1</div>
				<div className="shop__item">1</div>
			</div>

			<div className="shop__2">
				<Register />
				<RecomendedBar />
				<ArticlesBar />
			</div>
		</main>
	);
}
