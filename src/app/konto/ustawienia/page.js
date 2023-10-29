import Link from "next/link";

import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Ustawienia konta - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Settings() {
  return (
    <main>
      <PageWrapper>
        <section>Ustawienia konta</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
