import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Zamówienie nr 1 - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Order() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">STATUS ZAMÓWIENIA nr 1</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
