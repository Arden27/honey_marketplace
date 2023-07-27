import React from "react";
//import Head from "next/head";
import Providers from "@/redux/provider";

import "./index.css";

import Header from "../layout/header";
import Footer from "../layout/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <Head></Head>

      <body className="  bg-bg">
        <div className="min-h-screen grid-rows-[auto_minmax(0,1fr)_auto] grid grid-cols-1 ">
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
