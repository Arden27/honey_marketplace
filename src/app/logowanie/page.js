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
        <form>
          <fieldset
            className="grid grid-cols-1 items-center justify-items-center overflow-hidden rounded-[3rem] 
            bg-bg2 p-gap"
          >
            <h2 className="self-center">Zaloguj się</h2>
            <div
              className="my-gap flex w-full flex-col overflow-hidden 
            rounded-[3rem] bg-bg3 p-gap"
            >
              <legend className="sr-only">Zaloguj się</legend>
              <div></div>
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

              <div className="flex justify-between">
                <div>
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Zapamiętaj mnie</label>
                </div>

                <Link href="/logowanie/zmiana-hasla">Nie pamiętam hasła</Link>
              </div>
            </div>

            <div>
              <button
                className="btn-lg bottom-gap bg-bg hover:text-bg"
                href="/"
              >
                Zaloguj się
              </button>
            </div>
          </fieldset>
        </form>

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
