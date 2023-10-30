import PageWrapper from "@/components/PageWrapper";
import Box from "@/components/Box";
import LogInBox from "@/app/logowanie/loginComponents/LogInBox";
import RegisterBox from "@/app/logowanie/loginComponents/RegisterBox";
import NoRegisterBox from "@/app/logowanie/loginComponents/NoRegisterBox";

export const metadata = {
  title: "Zaloguj się bądź zarejestruj i zyskaj 5% rabatu - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function LogIn() {
  return (
    <main className="mb-sm">
      <PageWrapper>
        <Box type="lg">
          <div className=" grid gap-sm md:grid-cols-2 xl:grid-cols-[1.5fr,1fr,1.5fr]">
            <LogInBox />

            <RegisterBox />

            <NoRegisterBox />
          </div>
        </Box>
      </PageWrapper>
    </main>
  );
}
