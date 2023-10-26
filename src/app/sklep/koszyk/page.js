import Link from "next/link";

import FormFieldset from "@/components/forms/form-fieldset";
import InputLabel from "@/components/forms/input-label";

export const metadata = {
  title: "Koszyk - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Cart() {
  return (
    <main className="page-wrapper mb-lg">
      <div className="box-lg ">
        <h2>Koszyk</h2>
        <div className="[&>*]:box-sm mb-xl grid grid-rows-2 gap-sm md:grid-cols-2 [&>*]:bg-bg3">
          <section className="">
            <form className="h-full w-full">
              <FormFieldset legend="Twoje dane">
                <InputLabel type="email" id="log-in-email" label="*E-mail" />
              </FormFieldset>
              <FormFieldset legend="Dane adresowe">
                <InputLabel type="text" id="address-firstname" label="*Imię" />
                <InputLabel
                  type="text"
                  id="address-lastname"
                  label="*Nazwisko"
                />
                <InputLabel
                  type="text"
                  id="address-street"
                  label="*Ulica i nr domu"
                />
                <InputLabel
                  type="text"
                  id="address-zipcode"
                  label="*Kod pocztowy"
                />
                <InputLabel type="text" id="address-city" label="*Miasto" />
                <InputLabel type="text" id="address-country" label="*kraj" />
                <InputLabel
                  type="phone"
                  id="log-in-phone"
                  label="*Nr telefonu"
                />
              </FormFieldset>
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
          <section className=" row-span-full">
            <h2>Produkty</h2>

            <h2>Podsumowanie:</h2>
          </section>
        </div>
      </div>
    </main>
  );
}
