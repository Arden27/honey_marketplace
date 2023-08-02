import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Polityka prywatności - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Privacy() {
  return (
    <main>
      <section className="page-wrapper">POLITYKA PRYWATNOŚCI</section>

      <BottomBox />
    </main>
  );
}
