import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/BottomBox";

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
