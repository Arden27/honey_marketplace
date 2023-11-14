import Box from "@/app/_layout/Box";
import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/utils/formatPrice";

// Artem - kiedy brak wyników wyszukiwania wyświetla: Brak wyników wyszukiwania (nie wyświetla nagłówków jak nie ma wyników - trzeba uwzględnić sytuacje, kiedy są wyniki wyszukiwania artykułów a nie ma produktów i odwrotnie)

export default function SearchResult({ items, onResultClick }) {
  return (
    <Box className="slide-in-top absolute left-1/2 top-[calc(theme(spacing.3xl)+theme(spacing.2xl)+theme(spacing.3xs))] -z-[22] grid w-[calc(100%-theme(spacing.xs))] max-w-[calc(theme(screens.xl)+theme(spacing.sm))] grid-rows-[auto_auto] bg-bar">
      <div className="grid gap-sm border-b-2 border-text">
        <h2 className="">Produkty</h2>
        <div className="cart-items-scrollbar grid max-h-[calc(2*theme(spacing.3xl)+2*theme(spacing.md)+2*theme(spacing.sm))] grid-cols-[repeat(auto-fill,minmax(calc(20rem+0.5*theme(spacing.3xs)),1fr))] gap-sm overflow-auto pb-sm">
          {items.map((item) => (
            <Link
              href={`/sklep/${item.tag}`}
              className="[&_img]:hover:scale-110"
              onClick={onResultClick}
              key={item.id}
            >
              <div className="grid h-[calc(theme(spacing.3xl)+theme(spacing.md))] grid-cols-[3fr,7fr] grid-rows-[auto_1fr_auto] overflow-hidden rounded-[2rem] bg-bg3">
                <div className=" row-span-full overflow-hidden ">
                  <Image
                    className="h-full max-h-fit w-full object-cover object-center duration-300 ease-in-out "
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                  />
                </div>
                <div className="row-span-full grid  grid-rows-[subgrid] p-xs">
                  <div>
                    <h3>{item.name}</h3>
                    <h4>{item.name2}</h4>
                  </div>
                  <h4 className="flex items-center">{item.harvestDate}</h4>
                  <div className="mr-sm flex">
                    <span className="whitespace-nowrap">{`od ${item.sizes[0].price} zł`}</span>

                    <span className="relative -top-xs   left-3xs whitespace-nowrap text-sm font-bold text-warning line-through">
                      {formatPrice(item.sizes[0].price, 1.1)} zł
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2>Artykuły</h2>
      </div>
    </Box>
  );
}

{
  /* Artem?
  
  {item.sizes
              .map((size) => `${size.size} for ${size.price}`)
              .join(", ")} */
}
