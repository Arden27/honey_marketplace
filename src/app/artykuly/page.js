import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Artykuły - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main>
      <PageWrapper>
        <section>ARTYKUŁY</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
