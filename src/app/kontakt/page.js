import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Kontakt - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Contact() {
  return (
    <main>
      <section className="page-wrapper">KONTAKT</section>

      <BottomBox />
    </main>
  );
}
