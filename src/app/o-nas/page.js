import Link from "next/link";

import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "O nas - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function AboutUs() {
  return (
    <main className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
      O NAS
      <BottomBox />
    </main>
  );
}