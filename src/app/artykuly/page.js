import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

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
