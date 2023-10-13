import Link from "next/link";

import LogInBox from "@/components/box/log-in-box";
import NoRegisterBox from "@/components/box/no-register-box";
import RegisterBox from "@/components/box/promo-box";


export const metadata = {
  title: "Zaloguj się bądź zarejestruj i zyskaj 5% rabatu - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function LogIn() {
  return (
    <main className="page-wrapper mb-lg grid gap-sm md:grid-cols-2 xl:grid-cols-[1.5fr,1fr,1.5fr] [&>*]:justify-items-center">
      <LogInBox />

      <RegisterBox />
      <NoRegisterBox />
    </main>
  );
}
