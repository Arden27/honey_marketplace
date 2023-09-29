import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Moje opinie - Dobry Bartnik",
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
