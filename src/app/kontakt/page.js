import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/BottomBox";

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
