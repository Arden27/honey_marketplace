export default function SearchResult({ items }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li key={item.id} className="border-b border-gray-300">
          {item.name} -{" "}
          {item.sizes.map((size) => `${size.size} for ${size.price}`).join(", ")}
        </li>
      ))}
    </ul>
  );
}