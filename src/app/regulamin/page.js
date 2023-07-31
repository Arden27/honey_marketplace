import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Regulamin - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Statute() {
  return (
    <main>
      <section className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
        REGULAMIN
      </section>

      <BottomBox />
    </main>
  );
}
