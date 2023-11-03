import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Artykuły - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">ARTYKUŁY</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
