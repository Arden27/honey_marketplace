import Box from "@/app/_layout/Box";

export const metadata = {
  title: "Moje zamówienia - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function MyOrders() {
  return (
    <main className="">
      <Box format="lg">
        <table className="w-full border-separate border-spacing-0 ">
          <caption className="sr-only">Moje zamówienia</caption>
          <thead
            className="
                first-of-type:[&_th]
                bg-text
                font-btn
                text-sm
                uppercase
                text-bg
                [&_th]:border-t-2
                [&_th]:border-text
                [&_th]:p-2xs 
                first-of-type:[&_th]:border-l-2
                last-of-type:[&_th]:border-r-2 
                first-of-type:[&_th]:first-of-type:[&_tr]:rounded-tl-[2rem]
                last-of-type:[&_th]:first-of-type:[&_tr]:rounded-tr-[2rem]"
          >
            <tr className="hidden sm:table-row">
              <th scope="col">Numer</th>
              <th scope="col">Data</th>
              <th scope="col">Cena końcowa</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody
            className="[&_td]:block
                [&_td]:border-x-2
                [&_td]:border-t-2
                [&_td]:border-text   
                [&_td]:bg-bg3
                [&_td]:p-xs
                [&_td]:text-right
                [&_td]:before:float-left
                [&_td]:before:flex
                [&_td]:before:h-md
                [&_td]:before:items-center
                [&_td]:before:font-btn
                [&_td]:before:text-sm
                [&_td]:before:uppercase
                [&_td]:before:content-[attr(data-label)]
                first-of-type:[&_td]:mt-sm
                first-of-type:[&_td]:rounded-tl-[2rem]
                first-of-type:[&_td]:rounded-tr-[2rem]
                first-of-type:[&_td]:bg-text
                first-of-type:[&_td]:text-center
                first-of-type:[&_td]:font-btn
                first-of-type:[&_td]:text-sm
                first-of-type:[&_td]:text-bg3
                first-of-type:[&_td]:before:content-none
                last-of-type:[&_td]:rounded-bl-[2rem]
                last-of-type:[&_td]:rounded-br-[2rem]
                last-of-type:[&_td]:border-b-2
                sm:[&_td]:table-cell
                sm:[&_td]:border-x-0
                sm:[&_td]:text-center
                sm:[&_td]:before:content-none
                sm:first-of-type:[&_td]:rounded-none
                sm:first-of-type:[&_td]:border-l-2
                sm:first-of-type:[&_td]:bg-bg3 
                sm:first-of-type:[&_td]:font-[inherit]
                sm:first-of-type:[&_td]:text-md
                sm:first-of-type:[&_td]:text-text
                sm:last-of-type:[&_td]:rounded-none        
                sm:last-of-type:[&_td]:border-b-0 
                sm:last-of-type:[&_td]:border-r-2             
                sm:last-of-type:[&_td]:last-of-type:[&_tr]:rounded-br-[2rem] 
                sm:[&_td]:last-of-type:[&_tr]:border-b-2 
                sm:first-of-type:[&_td]:last-of-type:[&_tr]:rounded-bl-[2rem]"
          >
            <tr>
              <td data-label="Numer">231109/004</td>
              <td data-label="Data">09.11.2023, 12:15</td>
              <td data-label="Cena końcowa">2235,50 zł</td>
              <td className="   !bg-red-200 " data-label="Status">
                Oczekiwanie na płatność
              </td>
            </tr>
            <tr>
              <td data-label="Numer">231109/004</td>
              <td data-label="Data">09.11.2023 12:15</td>
              <td data-label="Cena końcowa">2235,50zł</td>
              <td className="    " data-label="Status">
                Oczekiwanie na płatność
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
      <Box format="lg">
        <h2>Moje zamówienia</h2>
        <div className="[&>*>*]:grid [&>*>*]:grid-cols-4 [&>*>*>*]:bg-bg3 ">
          <div
            className="[&>*>*]:bg-text
            [&>*>*]:text-bg3
            [&>*>*]:flex
            [&>*>*]:items-center
            [&>*>*]:justify-center
            [&>*>*]:border-t-2
            [&>*>*]:border-text
            [&>*>*]:p-2xs
            [&>*>*]:text-center
            [&>*>*]:font-btn
            [&>*>*]:text-sm
            [&>*>*]:uppercase
            first-of-type:[&>*>*]:border-l-2
            last-of-type:[&>*>*]:border-r-2
            first-of-type:[&>*]:first-of-type:[&>*]:rounded-tl-[2rem]
            last-of-type:[&>*]:first-of-type:[&>*]:rounded-tr-[2rem]"
          >
            <div>
              <div>Numer</div>
              <div>Data</div>
              <div>Cena końcowa</div>
              <div>Status</div>
            </div>

          </div>

          <div
            className="
            [&>*>*]:flex
            [&>*>*]:items-center
            [&>*>*]:justify-center
            [&>*]:last-of-type:[&>*]:border-b-2
            [&>*>*]:border-t-2
            [&>*>*]:border-l-2
            [&>*>*]:border-text
            [&>*>*]:p-2xs
            [&>*>*]:text-center
            first-of-type:[&>*>*]:border-l-2
            last-of-type:[&>*>*]:border-r-2"
          >
            <div className="grid grid-cols-4">
              <div>231109/001</div>
              <div>09.11.2023 12:00</div>
              <div>2235,50zł</div>
              <div>Zakończono</div>
            </div>
            <div className="grid grid-cols-4">
              <div>231109/001</div>
              <div>09.11.2023 12:00</div>
              <div>2235,50zł</div>
              <div>Zakończono</div>
            </div>
          </div>
        </div>
      </Box>
    </main>
  );
}
