import Box from "@/app/_layout/Box";
import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/utils/formatPrice";

// Artem - kiedy brak wyników wyszukiwania wyświetla: Brak wyników wyszukiwania (nie wyświetla nagłówków jak nie ma wyników - trzeba uwzględnić sytuacje, kiedy są wyniki wyszukiwania artykułów a nie ma produktów i odwrotnie)

export default function SearchResult({ items, onResultClick }) {
  return (
    <Box className="slide-in-top max-w-[calc(theme(screens.xl)+theme(spacing.sm))] gap-2xs absolute left-1/2 top-[calc(theme(spacing.3xl)+theme(spacing.2xl))] -z-[22] w-[calc(100%-theme(spacing.sm))] bg-bar">
      <h2 className="">Produkty</h2>
      <div className="cart-items-scrollbar grid max-h-[calc(3*theme(spacing.3xl)+3*theme(spacing.md)+3*theme(spacing.sm))] gap-sm overflow-auto border-b-2 border-text pb-sm sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          // ARTEM -- ten key i div musi być czy moze byc ponizej bo to pusty div jest.

          <div key={item.id}>
            <Link
              href={`/sklep/${item.tag}`}
              className=""
              onClick={onResultClick}
            >
              <div className=" grid h-[calc(theme(spacing.3xl)+theme(spacing.md))] grid-cols-[3fr,7fr] grid-rows-[auto_1fr_auto] overflow-hidden rounded-[2rem] border-gray-300 bg-bg3">
                <div className="row-span-full  overflow-hidden">
                  <Image
                    className="h-full w-full object-cover object-center duration-300 ease-in-out hover:scale-110"
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                  />
                </div>
                <div className="row-span-full grid max-h-fit grid-rows-[subgrid] p-xs">
                  <div>
                    <h3 className="  ">{item.name}</h3>
                    <h4>{item.name2}</h4>
                  </div>
                  <h5 className="flex items-center">{item.harvestDate}</h5>
                  <div className="mr-sm flex">
                    <span className="whitespace-nowrap">{`od ${item.sizes[0].price} zł`}</span>

                    <span className="relative -top-2xs  left-3xs whitespace-nowrap text-sm font-bold text-warning line-through">
                      {formatPrice(item.sizes[0].price, 1.1)} zł
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div>
        <h2>Artykuły</h2>
      </div>
    </Box>
  );
}

{
  /* {item.sizes
              .map((size) => `${size.size} for ${size.price}`)
              .join(", ")} */
}
