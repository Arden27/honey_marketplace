import React from "react";
import Head from "next/head";
import Providers from "@/redux/provider";

import "./style.scss";

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
					<Providers>
						<Header />
						{children}
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	);
}
