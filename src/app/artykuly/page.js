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
      <section className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
        ARTYKUŁY
      </section>

      <BottomBox />
    </main>
  );
}
