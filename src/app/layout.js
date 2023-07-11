import React from "react";
import Head from "next/head";

import "../sass/style.scss";
import Image from 'next/image'



import Header from "../layout/header";
import Footer from "../layout/footer";

export default function RootLayout({ children }) {
	return (
    	<html lang="pl">
			<Head>
			<script src="https://unpkg.com/feather-icons"></script>

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
