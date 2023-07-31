import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Zamówienie nr 1 - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Order() {
  return (
    <main>
      <section className="page-wrapper">

        STATUS ZAMÓWIENIA nr 1
      </section>

      <BottomBox />
    </main>
  );
}
