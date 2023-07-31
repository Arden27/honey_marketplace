import Link from "next/link";

export const metadata = {
  title: "Zaloguj się bądź zarejestruj i zyskaj 5% rabatu - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function LogIn() {
  return (
    <main>
      <div
        className="mx-auto grid w-[calc(100%-2*theme(spacing.md))] grid-cols-2 gap-gap 
      [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*]:overflow-hidden [&>*]:rounded-[3rem] [&>*]:bg-bg2 [&>*]:p-gap"
      >
        <section>
          <fieldset>
            <legend>
              <h2>Zaloguj się</h2>
            </legend>

            <input type="text" id="email" name="email" ></input>
            <label for="email">e-mail</label>
            <br />

            <input
              type="password"
              id="password"
              name="monster"

            ></input>
            <label for="password">hasło</label>
            <br />
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
