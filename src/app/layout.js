import React from "react";

import Providers from "@/redux/provider";

import "@/style/index.css";

import LoadDB from "@/components/load-db";
import Header from "../layout/header";
import Footer from "../layout/footer";
import BottomBox from "@/components/box/bottom-box";


export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="  bg-bg">
        <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] [&>main]:mt-[calc(theme(spacing.3xl)+theme(spacing.2xl))] [&>main]:md:mt-[calc(theme(spacing.3xl)+theme(spacing.2xl)+theme(spacing.sm))]">
          <Providers>
            <LoadDB />
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
