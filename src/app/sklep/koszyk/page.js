import Link from "next/link";

export const metadata = {
  title: "Koszyk - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Cart() {
  return (
    <main className="page-wrapper [&>*]:box-sm mb-xl grid grid-cols-3 grid-rows-2 gap-sm [&>*]:bg-bg3">
      <section className="row-span-full">
        <form className="h-full w-full">
          <fieldset className="flex flex-col">
            <legend>
              <h2>Twoje dane</h2>
            </legend>

            <input type="email" id="log-in-email" />
            <label htmlFor="log-in-email">*E-mail</label>

            <input type="phone" id="log-in-email" />
            <label htmlFor="log-in-email">*Nr telefonu</label>
          </fieldset>

          <fieldset className="flex flex-col">
            <legend>
              <h2>Dane adresowe</h2>
            </legend>

            <input type="email" id="log-in-email" />
            <label htmlFor="log-in-email">*Imię</label>

            <input type="email" id="log-in-email" />
            <label htmlFor="log-in-email">*Nazwisko</label>
            <input type="email" id="log-in-email" />
            <label htmlFor="log-in-email">*Ulica i nr domu</label>
            <input type="email" id="log-in-email" />
            <label htmlFor="log-in-email">*Kod pocztowy</label>
            <input type="email" id="log-in-email" />
            <label htmlFor="log-in-email">*Miasto</label>
            <input type="email" id="log-in-email" />
            <label htmlFor="log-in-email">*Kraj</label>
          </fieldset>
        </form>
      </section>

      <section className="">
        <h2>Dostawa</h2>

        <div className="flex items-center">
          <input type="radio" id="log-in-remember" />
          <label htmlFor="log-in-remember">Zapamiętaj mnie</label>
          <input type="radio" id="log-in-remember2" />
          <label htmlFor="log-in-remember2">Zapamiętaj mnie</label>
        </div>
      </section>
      <section className="">
        <h2>Produkty</h2>

        <h2>Podsumowanie:</h2>
      </section>
    </main>
  );
}
