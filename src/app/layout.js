import React from "react";
import Head from "next/head";

import "../sass/style.scss";
import Image from 'next/image'

import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
	return (
<<<<<<< HEAD
		<>
=======
    	<html lang="en">
>>>>>>> 010b4c2 (bug z brakiem html w layout.js naprawiony, header naprawiony (for => htmlFor, class => className)
			<Head>
				{/* <meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="author" content="Kurpiowski Bartnik" />

				<link
					rel="stylesheet"
					integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
					crossOrigin="anonymous"
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@300;400;700&display=swap"
					rel="stylesheet"
				/>

				<script
					src="https://kit.fontawesome.com/1fcccd6048.js"
					crossOrigin="anonymous"
				></script> */}
			</Head>

			<body className="body">
				<div className="grid">
					<Header />
						{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
