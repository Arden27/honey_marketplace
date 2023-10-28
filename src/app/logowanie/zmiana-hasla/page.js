import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";

export const metadata = {
  title: "Zmień hasło - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ChangePassword() {
  return (
    <main>
      <PageWrapper>
        <section>ZMIANA HASŁA</section>
      </PageWrapper>
    </main>
  );
}
