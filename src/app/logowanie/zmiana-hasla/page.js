import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";

export const metadata = {
  title: "Zmień hasło - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ChangePassword() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box format="lg">ZMIANA HASŁA</Box>
      </PageWrapper>
    </main>
  );
}
