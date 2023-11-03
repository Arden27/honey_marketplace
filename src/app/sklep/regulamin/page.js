import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Regulamin - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Statute() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">REGULAMIN</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
