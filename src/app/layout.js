import React from "react";
import Head from "next/head";
import Providers from "@/redux/provider";

import "./index.css";

import Header from "../layout/header";
import Footer from "../layout/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="h-full ">
      <Head></Head>

      <body className="h-full min-h-full">
        <div className="grid h-full grid-cols-1">
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
