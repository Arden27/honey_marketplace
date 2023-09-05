import React from "react";
import Link from "next/link";

export default function LogInBox() {
  return (
    <form>
      <fieldset className="box-lg grid-rows-[auto,1fr,auto] ">
        <h2>Zaloguj się</h2>
        <div className="box-sm flex flex-col">
          <legend className="sr-only">Zaloguj się</legend>
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Podaj swój email..."
          />

          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Podaj swoje hasło..."
          />

          <div className="flex justify-between">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Zapamiętaj mnie</label>
            </div>

            <Link href="/logowanie/zmiana-hasla">Nie pamiętam hasła</Link>
          </div>
        </div>

        <div>
          <button className="btn-lg bottom-gap bg-bg hover:text-bg" href="/">
            Zaloguj się
          </button>
        </div>
      </fieldset>
    </form>
  );
}
