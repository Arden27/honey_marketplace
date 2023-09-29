import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Polityka prywatności - Dobry Bartnik",
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
