import React from "react";
import Head from "next/head";
import Providers from "@/redux/provider";

import "./index.css";

import Header from "../layout/header";
import Footer from "../layout/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <Head></Head>

      <body className="">
        <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto]">
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
