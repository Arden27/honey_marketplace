import Link from "next/link";


import LogInBox from "@/components/log-in-box";
import NoRegisterBox from "@/components/no-register-box";
import RegisterBox from "@/components/register-box";

export const metadata = {
  title: "Zaloguj się bądź zarejestruj i zyskaj 5% rabatu - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function LogIn() {
  return (
    <main>
      <div className="page-wrapper grid gap-gap md:grid-cols-2">
        <LogInBox />
        <NoRegisterBox />
        <RegisterBox />
      </div>
    </main>
  );
}
