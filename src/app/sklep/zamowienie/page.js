import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

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
