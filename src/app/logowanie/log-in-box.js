import React from "react";
import Link from "next/link";

import Box from "@/components/Box";

export default function LogInBox() {
  return (
    <Box size="sm">
      <h2 aria-hidden="true">Zaloguj się</h2>

      <form className="mb-sm w-full">
        <fieldset className="flex flex-col">
          <legend className="sr-only">Zaloguj się</legend>

          <input
            type="email"
            id="log-in-email"
            placeholder="Podaj swój email..."
          />
          <label htmlFor="log-in-email">Email</label>

          <label htmlFor="log-in-password">
            Hasło
            <input
              type="password"
              id="log-in-password"
              placeholder="Podaj swoje hasło..."
            />
          </label>

          <div className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="log-in-remember" />
              <label htmlFor="log-in-remember">Zapamiętaj mnie</label>
            </div>

            <Link href="/logowanie/zmiana-hasla">Nie pamiętam hasła</Link>
          </div>
        </fieldset>
      </form>

      <button className="btn-lg w-fit border-text self-end hover:text-bg" href="/">
        Zaloguj się
      </button>
    </Box>
  );
}
