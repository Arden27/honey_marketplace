import Link from "next/link";
import UserFieldset from "./fieldsets/user-form";
import AddressFieldset from "./fieldsets/address-fieldset";


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
        <div className="[&>*]:box-sm mb-xl grid grid-cols-3 grid-rows-2 gap-sm [&>*]:bg-bg3">
          <section className="row-span-full">
            <form className="h-full w-full">
              <UserFieldset />
              <AddressFieldset />
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
        </div>
      </div>
    </main>
  );
}
