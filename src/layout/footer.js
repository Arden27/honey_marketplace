import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="page-wrapper footer-wrapper">
				<div className="footer__item footer__item--menu">
					<h2>Menu</h2>
					<ul>
						<li>
							<Link className="" href="/sklep">
								Sklep
							</Link>
						</li>
						<li>
							<Link className="" href="/artykuly">
								Artykuły
							</Link>
						</li>
						<li>
							<Link className="" href="/o-nas">
								O nas
							</Link>
						</li>
						<li>
							<Link className="" href="/matki">
								Matki
							</Link>
						</li>
						<li>
							<Link className="" href="/kontakt">
								Kontakt
							</Link>
						</li>
					</ul>
				</div>
				<div className="footer__item footer__item--info">
					<h2>Informacje</h2>
					<ul>
						<li>
							<Link className="" href="/regulamin">
								Regulamin
							</Link>
						</li>
						<li>
							<Link className="" href="/prywatnosc">
								Polityka prywatności
							</Link>
						</li>
						<li>
							<Link className="" href="/dostawa">
								Dostawa
							</Link>
						</li>
						<li>
							<Link className="" href="/reklamacje">
								Zwroty i reklamacje
							</Link>
						</li>
					</ul>
				</div>
				<div className="footer__item footer__item--account">
					<h2>Moje konto</h2>
					<ul>
						<li>
							<Link className="" href="/zamowienia">
								Zamówienia
							</Link>
						</li>
						<li>
							<Link className="" href="/opinie">
								Opinie
							</Link>
						</li>
						<li>
							<Link className="" href="/ustawienia">
								Ustawienia
							</Link>
						</li>
						<li>
							<Link className="" href="/">
								Wyloguj się
							</Link>
						</li>
					</ul>
				</div>
				<div className="footer__item footer__item--data">
					<h2>Dane Pasieki</h2>
					<p>
						Stanisław Młynarczyk
						<br />
						Olszyny 26
						<br />
						07-430 Myszyniec
						<br />
						Nr weterynaryjny 14156077
						<br />
					</p>
				</div>
				<div className="footer__item footer__item--media-bar">
					<ul>
						<li>
							<Link className="" href="/">
								Fb
							</Link>
							<Link className="" href="/">
								Ins
							</Link>
							<Link className="" href="/">
								Sig
							</Link>
							<Link className="" href="/">
								Tel
							</Link>

						</li>
					</ul>
				</div>
				<div className="footer__item footer__item--copyrights">
					<p>
						Copyright &copy; 2023 <Link href="/">Kurpiowski Bartnik</Link>.
						Wszystkie prawa zastrzeżone.
					</p>
				</div>
			</div>
		</footer>
	);
}
