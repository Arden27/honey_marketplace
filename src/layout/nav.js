import React from "react";

import Btn from "@/components/btns/Btn";

export default function Nav() {
  return (
    <nav className="fixed left-[calc(theme(spacing.sm)+theme(spacing.lg)+theme(spacing.xs)+theme(spacing.3xs))] z-20 lg:left-sm">
      <ul className="flex">
        <li className="mr-3xs hidden 380px:!flex lg:flex">
          <Btn className="" href="/sklep" type="sm" hoverColor="header">
            Sklep
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:!hidden xl:!flex">
          <Btn
            className="border-transparent"
            href="/"
            type="sm"
            hoverColor="header"
          >
            Główna
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Btn
            className="border-transparent"
            href="/artykuly/o-nas"
            type="sm"
            hoverColor="header"
          >
            O nas
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Btn
            className="border-transparent"
            href="/artykuly"
            type="sm"
            hoverColor="header"
          >
            Artykuły
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Btn
            className="border-transparent"
            href="/kontakt"
            type="sm"
            hoverColor="header"
          >
            Kontakt
          </Btn>
        </li>
      </ul>
    </nav>
  );
}
