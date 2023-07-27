import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Ustawienia konta - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Settings() {
  return (
    <main className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
      USTAWIENIA KONTA
      <BottomBox />
    </main>
  );
}
