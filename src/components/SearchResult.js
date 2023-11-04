import Link from "next/link";

export default function SearchResult({ items, onResultClick }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li key={item.id} className="border-b border-gray-300">
          <Link
            href={`/sklep/${item.tag}`}
            className="relative overflow-hidden"
            onClick={onResultClick}
          >
            {item.name} -{" "}
            {`od ${item.sizes[0].price} zł`}
            {/* {item.sizes
              .map((size) => `${size.size} for ${size.price}`)
              .join(", ")} */}
          </Link>
        </li>
      ))}
    </ul>
  );
}
