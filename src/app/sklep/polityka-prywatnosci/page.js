import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Polityka prywatności - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Privacy() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">POLITYKA PRYWATNOŚCI</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
