import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Ustawienia konta - Dobry Bartnik",
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
