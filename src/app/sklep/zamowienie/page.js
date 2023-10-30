import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Zamówienie nr 1 - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Order() {
  return (
    <main>
      <PageWrapper>
        <section>STATUS ZAMÓWIENIA nr 1</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
