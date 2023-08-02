import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Matki - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Queens() {
  return (
    <main>
      <section className="page-wrapper">MATKI</section>

      <BottomBox />
    </main>
  );
}
