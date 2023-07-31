import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Ustawienia konta - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Settings() {
  return (
    <main>
      <section className="page-wrapper">Ustawienia konta</section>

      <BottomBox />
    </main>
  );
}
