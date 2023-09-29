import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Zwroty i reklamacje - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ReturnsAndComplaints() {
  return (
    <main>
      <section className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
        ZWROTY I REKLAMACJE
      </section>

      <BottomBox />
    </main>
  );
}
