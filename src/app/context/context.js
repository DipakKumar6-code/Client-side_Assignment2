"use client";

import { createContext, useContext, useState } from "react";

export const searchContext = createContext();

export const useSearch = () => useContext(searchContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <searchContext.Provider
      value={{ search, setSearch, searchResults, setSearchResults }}
    >
      {children}
    </searchContext.Provider>
  );
};
