import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

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
