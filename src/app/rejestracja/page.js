import PageWrapper from "@/app/_layout/PageWrapper";
import Box from "@/app/_layout/Box";

export const metadata = {
  title: "Rejestracja - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Register() {
  return (
    <main className="flex flex-col gap-sm">
      <PageWrapper>
        <Box format="lg">Rejestracja</Box>
      </PageWrapper>
    </main>
  );
}
