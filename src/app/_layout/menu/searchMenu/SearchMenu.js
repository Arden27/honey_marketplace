"use client";

import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openSearch, closeSearch } from "@/redux/store";
import useOutsideClick from "@/hooks/useOutsideClick";

import Button from "@/components/Button";
import SearchBar from "@/app/_layout/menu/searchMenu/SearchBar";
import SearchResult from "@/app/_layout/menu/searchMenu/SearchResult";
import SearchIcon from "public/icons/search.svg";
import Box from "@/app/_layout/Box";

export default function SearchMenu() {
  
  const node = useRef();
  const buttonRef = useRef();
  const isSearchOpen = useSelector((state) => state.isSearchOpen)
  const [wasOpened, setWasOpened] = useState(false);

  const dispatch = useDispatch();

  useOutsideClick([node, buttonRef], () => {
    dispatch(closeSearch());
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Access items from Redux store
  const items = useSelector((state) => state.items);

  // A utility function that removes diacritics
  function normalizeText(text) {
    return text
      .normalize("NFD") // Normalize to NFD Unicode form
      .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
  }

  // Filter items by name, accounting for Polish letters
  const filteredItems = searchTerm
    ? items.filter((item) =>
        normalizeText(item.name)
          .toLowerCase()
          .includes(normalizeText(searchTerm).toLowerCase()),
      )
    : [];

  // Handler for input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSearchClear = () => {
    setSearchTerm("");
  };

  const onResultClick = () => {
    dispatch(closeSearch())
    setSearchTerm("");
  };

  return (
    <React.Fragment>
      <Button
        className="ml-3xs hidden hover:text-header  330px:flex"
        type="icon"
        ref={buttonRef}
        onClick={() => {
          setWasOpened(true);
          isSearchOpen ? dispatch(closeSearch()) : dispatch(openSearch())
        }}
      >
        <SearchIcon />
      </Button>

      <div
        className={`fixed left-1/2 top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-[21] w-[calc(100%-theme(spacing.xs))]  max-w-[calc(theme(screens.xl)+theme(spacing.sm))] -translate-x-1/2 flex-col self-center rounded-b-[2rem] bg-bar  p-sm shadow 330px:fixed
        ${
          isSearchOpen
            ? "slide-in-top  flex"
            : wasOpened
            ? "slide-in-top 330px:slide-out-top flex"
            : "slide-in-top  flex 330px:hidden"
        } `}
        ref={node}
      >
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchClear={onSearchClear}
        />

        {/* ARTEM - Ma się pojawiać dopiero wraz z wynikami wyszukiwania: */}

        {searchTerm && (
          <Box className="absolute left-0 top-[calc(theme(spacing.lg)+3*theme(spacing.sm))] w-full rounded-[3rem] bg-bar">
            <SearchResult items={filteredItems} onResultClick={onResultClick} />
          </Box>
        )}
      </div>
    </React.Fragment>
  );
}
