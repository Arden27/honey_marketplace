import Link from "next/link";


import LogInBox from "@/components/box/log-in-box";
import NoRegisterBox from "@/components/box/no-register-box";
import RegisterBox from "@/components/box/register-box";

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
