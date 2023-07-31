import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "O nas - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function AboutUs() {
  return (
    <main>
      <section className="page-wrapper">O NAS</section>

      <BottomBox />
    </main>
  );
}
