import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Kontakt - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Contact() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">KONTAKT</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
