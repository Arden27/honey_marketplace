import Link from "next/link";

export default function Breadcrumb({ pathname, category, searchParams }) {
  return (
    <div className="w-full ">
      <span>/</span>
      {pathname === "sklep" && !category ? (
        "sklep"
      ) : (
        <Link className="hover:underline" href="sklep">
          sklep
        </Link>
      )}
      {category && (
        <>
          <span>/</span>
          {category === searchParams.get("kategoria") ? (
            category
          ) : (
            <Link
              className="hover:underline"
              href={`sklep?kategoria=${category}`}
            >
              {category}
            </Link>
          )}
        </>
      )}
    </div>
  );
};