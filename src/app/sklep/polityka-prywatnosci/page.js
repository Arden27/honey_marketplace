import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/BottomBox";

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
