import React from "react";

import Btn from "@/components/btns/Btn";

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex">
        <li className="mr-3xs hidden 380px:!flex lg:flex">
          <Btn
            className="hover:text-header"
            href="/sklep"
            type="sm"
          >
            Sklep
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:!hidden xl:!flex">
          <Btn
            className="border-transparent hover:text-header "
            href="/"
            type="sm"
          >
            Główna
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Btn
            className="border-transparent hover:text-header"
            href="/artykuly/o-nas"
            type="sm"
          >
            O nas
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Btn
            className="border-transparent hover:text-header"
            href="/artykuly"
            type="sm"
          >
            Artykuły
          </Btn>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Btn
            className="border-transparent hover:text-header"
            href="/kontakt"
            type="sm"
          >
            Kontakt
          </Btn>
        </li>
      </ul>
    </nav>
  );
}
