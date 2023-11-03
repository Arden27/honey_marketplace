import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";

export const metadata = {
  title: "Zmień hasło - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function ChangePassword() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">ZMIANA HASŁA</Box>
      </PageWrapper>
    </main>
  );
}
