import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Dostawa - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Delivery() {
  return (
    <main>
      <PageWrapper>
        <section>Dostawa</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
