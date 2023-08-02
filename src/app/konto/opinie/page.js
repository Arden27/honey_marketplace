import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Moje opinie - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main>
      <section className="page-wrapper">Moje opinie</section>

      <BottomBox />
    </main>
  );
}
