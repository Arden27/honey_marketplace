import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Dostawa - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Delivery() {
  return (
    <main>
      <section className="page-wrapper">Dostawa</section>

      <BottomBox />
    </main>
  );
}
