import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Zwroty i reklamacje - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ReturnsAndComplaints() {
  return (
    <main>
      <PageWrapper>
        <section className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
          ZWROTY I REKLAMACJE
        </section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
