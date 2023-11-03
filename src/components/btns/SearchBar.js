import SearchIcon from "public/icons/search.svg";
import DeleteIcon from "public/icons/x.svg";

export default function SearchBar() {
  return (
    <form className="relative flex w-full ">
      <input
        type="search"
        id="search"
        placeholder="Wyszukaj..."
        className="h-[calc(theme(spacing.lg)+theme(spacing.xs))] w-full rounded-[2rem] border-2 border-solid border-text bg-transparent pl-[calc(20px+2*theme(spacing.sm))] pr-[calc(25px+2*theme(spacing.sm))] text-text placeholder:text-text placeholder:opacity-50 "
      />

      <div className="absolute left-sm flex h-[calc(theme(spacing.lg)+theme(spacing.xs))] items-center justify-center">
        {/* ARTEM - Tutaj chciałbym aby ikonka była lupą kiedy jeszcze nie kliknięte, a dopiero potem buttonem gdy kliknięte w input
            
            <div className="text-center opacity-50">
              <SearchIcon className="h-[20px] w-[20px] stroke-text stroke-2" />
            </div> */}
        <button
          className="flex h-md w-md items-center justify-center rounded-[2rem] opacity-50 hover:bg-text  hover:text-bar hover:opacity-100"
        >
          <DeleteIcon className=" h-[20px] w-[20px]  stroke-2" />
        </button>
      </div>
      <button
        className="absolute right-0 h-full w-[calc(theme(spacing.xl)+theme(spacing.xs))] rounded-r-[2rem] transition-colors duration-300 ease-in-out hover:bg-text hover:text-bar"
      >
        <SearchIcon className="mx-sm h-[25px] w-[25px] stroke-2" />
      </button>
    </form>
  );
}
