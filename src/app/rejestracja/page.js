import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";

export const metadata = {
  title: "Rejestracja - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Register() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box type="lg">Rejestracja</Box>
      </PageWrapper>
    </main>
  );
}
