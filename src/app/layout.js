import React from "react";

import Providers from "@/redux/provider";

import "@/style/index.css";

import LoadDB from "@/components/LoadDB";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Dimmer from "@/components/Dimmer";


export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-bg ">
        <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] ">
          <Providers>
            <LoadDB />
            <Header />
            <Dimmer />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
