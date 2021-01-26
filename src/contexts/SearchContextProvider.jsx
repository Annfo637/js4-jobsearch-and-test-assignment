import React, { createContext, useState } from "react";

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [searchString, setSearchString] = useState("");
  const [jobList, setJobList] = useState([]);
  const [searchList, setSearchList] = useState({});

  return (
    <div>
      <SearchContext.Provider
        value={{
          searchString,
          setSearchString,
          jobList,
          setJobList,
          searchList,
          setSearchList,
        }}
      >
        {children}
      </SearchContext.Provider>
    </div>
  );
}
