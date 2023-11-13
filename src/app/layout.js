import React from "react";
import Providers from "@/redux/provider";
import LoadDB from "@/utils/LoadDB";

import "@/style/index.css";

import Header from "./_layout/Header";
import Dimmer from "./_layout/Dimmer";
import Footer from "./_layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-bg">
        <div className="grid grid-rows-[auto-fit_1fr_auto] gap-y-lg [&>*>*]:col-start-2  [&>*>*]:col-end-3 [&>*]:grid [&>*]:grid-cols-[minmax(theme(spacing.2xs),auto)_minmax(auto,theme(screens.xl))_minmax(theme(spacing.2xs),auto)] [&>*]:gap-y-sm sm:[&>*]:grid-cols-[minmax(theme(spacing.sm),auto)_minmax(auto,theme(screens.xl))_minmax(theme(spacing.sm),auto)]">
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
