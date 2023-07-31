import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Polityka prywatności - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Privacy() {
  return (
    <main>
      <section className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
        POLITYKA PRYWATNOŚCI
      </section>

      <BottomBox />
    </main>
  );
}
