import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "O nas - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function AboutUs() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">O NAS</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
