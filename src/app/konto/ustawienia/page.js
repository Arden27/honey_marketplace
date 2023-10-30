import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/BottomBox";

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
