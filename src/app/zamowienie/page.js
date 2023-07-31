import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Zamówienie nr 1 - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Order() {
  return (
    <main>
      <section className="mx-auto w-[calc(100%-2*theme(spacing.md))]">

        STATUS ZAMÓWIENIA nr 1
      </section>

      <BottomBox />
    </main>
  );
}
