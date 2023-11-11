import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Kontakt - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Contact() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box format="lg">KONTAKT</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
