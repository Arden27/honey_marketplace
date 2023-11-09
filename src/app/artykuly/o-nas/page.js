import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "O nas - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function AboutUs() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box format="lg">O NAS</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
