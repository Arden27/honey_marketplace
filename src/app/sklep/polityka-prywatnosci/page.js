import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Polityka prywatności - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Privacy() {
  return (
    <main>
      <PageWrapper>
        <section>POLITYKA PRYWATNOŚCI</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
