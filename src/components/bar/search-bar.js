import React from "react";
import Link from "next/link";

import SearchIcon from "public/icons/search.svg";

export default function SearchBar() {
  return (
    <button className="z-30 btn-sm [&>*]:hover:stroke-header">
      <SearchIcon className="h-[25px] w-[25px] stroke-text stroke-2 " />
    </button>
  );
}
