import PageWrapper from "@/components/PageWrapper";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "O nas - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function AboutUs() {
  return (
    <main>
      <PageWrapper>
        <section>O NAS</section>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
