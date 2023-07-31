import Link from "next/link";

export const metadata = {
  title: "Zaloguj się bądź zarejestruj i zyskaj 5% rabatu - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function LogIn() {
  return (
    <main>
      <div className="page-wrapper grid gap-gap md:grid-cols-2">
        <section className="flex flex-col items-center  overflow-hidden rounded-[3rem] bg-bg2 p-gap">
          <fieldset>
            <legend>
              Zaloguj się
            </legend>
            <label for="email">Email</label>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Podaj swój email..."
            />

            <label for="password">Hasło</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Podaj swoje hasło..."
            />

            <div>
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Zapamiętaj mnie</label>

              <Link  href="/rejestracja">
                Nie pamiętam hasła
              </Link>
            </div>
          </fieldset>

          <Link className="btn-lg bottom-gap bg-bg hover:text-bg" href="/">
            Zaloguj się
          </Link>
        </section>

        <section>
          <h2>Zarejestruj się</h2>
          <Link
            className="btn-lg bottom-gap bg-bg hover:text-bg"
            href="/rejestracja"
          >
            Zarejestruj się
          </Link>
        </section>
      </div>
    </main>
  );
}
