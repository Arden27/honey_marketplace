import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Artykuły - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main>
      <section className="page-wrapper">ARTYKUŁY</section>

      <BottomBox />
    </main>
  );
}
