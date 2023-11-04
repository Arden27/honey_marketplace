import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Moje zamówienia - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">Moje zamówienia</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
