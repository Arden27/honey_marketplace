import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Zwroty i reklamacje - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ReturnsAndComplaints() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">
          ZWROTY I REKLAMACJE
        </Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
