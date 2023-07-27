import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Dostawa - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Delivery() {
  return (
    <main className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
      DOSTAWA
      <BottomBox />
    </main>
  );
}
