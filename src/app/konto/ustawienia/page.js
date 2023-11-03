import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import BottomBox from "@/layout/bottom-box/BottomBox";

export const metadata = {
  title: "Ustawienia konta - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Settings() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">Ustawienia konta</Box>
      </PageWrapper>

      <BottomBox />
    </main>
  );
}
