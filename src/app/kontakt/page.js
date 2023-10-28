import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Kontakt - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Contact() {
  return (
    <main>
      <PageWrapper>
        <section>KONTAKT</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
