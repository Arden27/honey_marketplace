import React from "react";
import Head from "next/head";

import "./sass/style.scss";

import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="author" content="Kurpiowski Bartnik" />
				<meta name="keywords" content="TAGI" />
				<meta name="description" content="OPIS STRONY" />

				<link
					rel="stylesheet"
					integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
					crossOrigin="anonymous"
				/>

				<script
					src="https://kit.fontawesome.com/1fcccd6048.js"
					crossOrigin="anonymous"
				></script>
			</Head>

			<Header />
			{children}
			<Footer />
		</>
	);
}
