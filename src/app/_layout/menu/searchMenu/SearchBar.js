import Button from "@/components/Button";
import SearchIcon from "public/icons/search.svg";
import DeleteIcon from "public/icons/x.svg";

export default function SearchBar({
  searchTerm,
  onSearchChange,
  onSearchClear,
}) {
  return (
    <form
      className="relative flex w-full "
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="search"
        id="search"
        placeholder="Wyszukaj..."
        className=" h-[calc(theme(spacing.lg)+theme(spacing.xs))] w-full rounded-[2rem] border-2 border-solid border-text bg-transparent pl-sm pr-[calc(theme(spacing.2xl))] text-text placeholder:text-text placeholder:opacity-50"
        value={searchTerm}
        onChange={onSearchChange}
      />

      {searchTerm ? (
        <Button
          format="icon"
          className="!absolute right-0 h-full w-[calc(theme(spacing.lg)+3*theme(spacing.2xs))] rounded-l-none transition-colors duration-300 ease-in-out hover:text-bar active:!top-0"
          type="button"
          onClick={onSearchClear}
        >
          <DeleteIcon className="" />
        </Button>
      ) : (
        <Button
          format="icon"
          className="!absolute right-0 h-full w-[calc(theme(spacing.lg)+3*theme(spacing.2xs))] rounded-l-none transition-colors duration-300 ease-in-out hover:text-bar active:!top-0"
          type="button"
          onClick={onSearchClear}
        >
          <SearchIcon />
        </Button>
      )}
    </form>
  );
}
