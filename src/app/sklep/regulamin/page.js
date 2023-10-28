import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Regulamin - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Statute() {
  return (
    <main>
      <PageWrapper>
        <section>REGULAMIN</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
