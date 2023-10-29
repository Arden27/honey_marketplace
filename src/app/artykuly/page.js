import Link from "next/link";

import Box from "@/components/Box";
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
        <Box size="lg">

        </Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
