import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Moje zamówienia - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main>
      <PageWrapper>
        <section>Moje zamówienia</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
