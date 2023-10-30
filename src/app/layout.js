import React from "react";

import Providers from "@/redux/provider";

import "@/style/index.css";

import LoadDB from "@/components/load-db";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-bg">
        <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] ">
          <Providers>
            <LoadDB />
            <div className="flex flex-col gap-lg">
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
