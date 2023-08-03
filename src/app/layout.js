import React from "react";

import Providers from "@/redux/provider";

import "@/style/index.css";

import Header from "../layout/header";
import Footer from "../layout/footer";
import BottomBox from "@/components/box/bottom-box";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="  bg-bg">
        <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto]">
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
