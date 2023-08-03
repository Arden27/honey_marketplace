import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Koszyk - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Cart() {
  return (
    <main>
      <section className="page-wrapper">KOSZYK</section>

      <BottomBox />
    </main>
  );
}
