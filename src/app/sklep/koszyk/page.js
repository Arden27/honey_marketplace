import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Koszyk - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Cart() {
  return (
    <main className="page-wrapper mb-xl grid grid-cols-2 gap-gap">
      <div className="[&>*]:box-lg flex flex-col [&>*]:mb-gap [&>*]:h-auto last:[&>*]:mb-0">
        <section className="">
          <h2>Produkty:</h2>
        </section>
        <section className="">
          <h2>Dostawa:</h2>
        </section>
        <section className="">
          <h2>Płatność:</h2>
        </section>
      </div>

      <section className="box-lg col-start-2 row-span-full">
        <h2>Podsumowanie:</h2>
      </section>
    </main>
  );
}