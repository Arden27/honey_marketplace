import Link from "next/link";

import PageWrapper from "@/components/page-wrapper";

import EditIcon from "public/icons/edit.svg";
import FormFieldset from "@/components/forms/form-fieldset";
import InputLabel from "@/components/forms/input-label";

export const metadata = {
  title: "Koszyk - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Cart() {
  return (
    <main>
      <PageWrapper>
        <section className="box-lg">
          <h1>Koszyk</h1>
          <div className="grid gap-sm md:grid-cols-[minmax(50%,1fr)_auto]">
            <div className="flex flex-col gap-sm">
              <section className="box-sm relative grid gap-md">
                <button className="absolute right-0 m-sm">
                  <EditIcon />
                </button>
                <FormFieldset legend="Moje dane">
                  <div className="flex gap-3xs">
                    <InputLabel
                      type="text"
                      id="main-adress-firstname"
                      label="Imię"
                    />
                    <InputLabel
                      type="text"
                      id="main-adress-lastname"
                      label="Nazwisko"
                    />
                  </div>
                  <InputLabel type="email" id="log-in-email" label="E-mail" />
                  <InputLabel
                    type="phone"
                    id="main-adress-phone"
                    label="Nr telefonu"
                  />
                </FormFieldset>
                <FormFieldset legend="Adres rozliczeniowy">
                  <InputLabel
                    type="text"
                    id="main-adress-street"
                    label="Ulica i nr domu"
                  />
                  <div className="flex gap-3xs">
                    <InputLabel
                      type="text"
                      id="main-adress-zipcode"
                      label="Kod pocztowy"
                    />
                    <InputLabel
                      type="text"
                      id="main-adress-city"
                      label="Miasto
                  "
                    />
                  </div>
                  {/* <InputLabel
                  type="text"
                  id="main-adress-country"
                  label="Państwo"
                /> */}

                  <sub>
                    * Aby kontynuować należy wypełnić wszystkie oznaczone
                    komórki
                  </sub>
                </FormFieldset>

                <div className="flex justify-center">
                  <button className="btn-sm border-text">Zapisz</button>
                </div>
              </section>

              <section className="box-sm relative grid gap-sm">
                <button className="absolute right-0 m-sm">
                  <EditIcon />
                </button>
                <FormFieldset legend="Adres dostawy">
                  <InputLabel
                    type="checkbox"
                    id="send-send-address-firstname"
                    label="Taki sam jak mój adres rozliczeniowy"
                  />

                  <div className="flex gap-3xs">
                    <InputLabel
                      type="text"
                      id="send-address-firstname"
                      label="Imię"
                    />
                    <InputLabel
                      type="text"
                      id="send-address-lastname"
                      label="Nazwisko"
                    />
                  </div>
                  <InputLabel
                    type="text"
                    id="send-address-street"
                    label="Ulica i nr domu"
                  />
                  <div className="flex gap-3xs">
                    <InputLabel
                      type="text"
                      id="send-address-zipcode"
                      label="Kod pocztowy"
                    />
                    <InputLabel
                      type="text"
                      id="send-address-city"
                      label="Miasto"
                    />
                  </div>
                  {/* <InputLabel
                  type="text"
                  id="send-address-country"
                  label="Państwo"
                /> */}
                </FormFieldset>

                <FormFieldset legend="Sposób dostawy">
                  <InputLabel
                    type="radio"
                    id="delivery-method-inpost-courier"
                    label="Kurier InPost"
                  />
                  <InputLabel
                    type="radio"
                    id="delivery-method-inpost-lockers"
                    label="Paczkomaty InPost"
                  />
                </FormFieldset>
                <div className="flex justify-center">
                  <button className="btn-sm border-text">Zapisz</button>
                </div>
              </section>

              <section className="box-sm relative grid gap-sm">
                <button className="absolute right-0 m-sm">
                  <EditIcon />
                </button>
                <FormFieldset legend="Płatności">
                  <InputLabel
                    type="radio"
                    id="payment-transfer"
                    label="Przelew online"
                  />
                  <InputLabel type="radio" id="payment-blik" label="BLIK" />
                  <InputLabel
                    type="radio"
                    id="payment-card"
                    label="Karta płatnicza"
                  />
                  <InputLabel
                    type="radio"
                    id="payment-apple"
                    label="Apple Pay"
                  />
                  <InputLabel
                    type="radio"
                    id="payment-google"
                    label="Google Pay"
                  />
                  <InputLabel type="radio" id="payment-paypal" label="Paypal" />
                  <InputLabel
                    type="radio"
                    id="payment-cash"
                    label="Za pobraniem"
                  />
                </FormFieldset>

                <div className="flex justify-center">
                  <button className="btn-sm border-text">Zapisz</button>
                </div>
              </section>
            </div>

            <section className="box-sm flex flex-col gap-sm md:max-w-[30rem]">
              <h2>Produkty</h2>

              <h2>Podsumowanie:</h2>

              <div className="flex justify-center">
                <button className="btn-lg border-text">
                  Przejdź do płatności
                </button>
              </div>
            </section>
          </div>
        </section>
      </PageWrapper>
    </main>
  );
}
