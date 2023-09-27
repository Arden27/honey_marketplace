import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Regulamin - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Statute() {
  return (
    <main>
      <section className="page-wrapper">REGULAMIN</section>

      <BottomBox />
    </main>
  );
}
