import React from "react";

import Button from "@/components/Button";

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex">
        <li className="mr-3xs hidden 380px:!flex lg:flex">
          <Button className="hover:text-header" href="/sklep" format="sm">
            Sklep
          </Button>
        </li>
        <li className="mr-3xs hidden lg:!hidden xl:!flex">
          <Button
            className="border-transparent hover:text-header "
            href="/"
            format="sm"
          >
            Główna
          </Button>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Button
            className="border-transparent hover:text-header"
            href="/artykuly/o-nas"
            format="sm"
          >
            O nas
          </Button>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Button
            className="border-transparent hover:text-header"
            href="/artykuly"
            format="sm"
          >
            Artykuły
          </Button>
        </li>
        <li className="mr-3xs hidden lg:flex ">
          <Button
            className="border-transparent hover:text-header"
            href="/kontakt"
            format="sm"
          >
            Kontakt
          </Button>
        </li>
      </ul>
    </nav>
  );
}
