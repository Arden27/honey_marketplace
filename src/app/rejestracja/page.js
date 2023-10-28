import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";
import BottomBox from "@/layout/bottom-box/bottom-box";

export const metadata = {
  title: "Rejestracja - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Register() {
  return (
    <main>
      <PageWrapper>
        <section>Rejestracja</section>
      </PageWrapper>
    </main>
  );
}
