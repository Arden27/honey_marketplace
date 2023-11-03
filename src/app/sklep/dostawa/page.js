import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Dostawa - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Delivery() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">Dostawa</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
