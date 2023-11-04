import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

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
