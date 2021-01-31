import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContextProvider";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  top: 40px;
  background-color: lightgray;
  text-align: center;
  border: lightgray solid 2px;
  border-radius: 15px;
  padding: 40px;
  margin: 0 25%;
`;

const Heading = styled.h1`
  font-size: 32px;
`;

const StyledSpan = styled.span`
  font-size: 24px;
  font-style: italic;
`;

const SearchInputField = styled.input`
  font-size: 18px;
  margin-right: 5px;
  padding: 5px;
  border: solid 1px transparent;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  color: whitesmoke;
  background-color: #e6b854;
  font-size: 18px;
  margin-left: 5px;
  padding: 5px;
  border: solid 1px transparent;
  border-radius: 5px;
  box-shadow: 5px 5px 3px #888888;
`;

export default function SearchInput() {
  const { searchString, setSearchString } = useContext(SearchContext);

  function handleSearchString() {
    const modifiedString = searchString.replace(" ", "+");
    setSearchString(modifiedString);
  }

  return (
    <SearchContainer>
      <Heading>
        Find your new job
        <br /> <StyledSpan>with</StyledSpan> <br />
        GitHub Job Listing
      </Heading>
      <h3>Please enter keyword(s) below</h3>
      <SearchInputField
        type="text"
        placeholder="Enter keyword"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Link to="/jobs/">
        <SearchButton type="button" onClick={handleSearchString}>
          Search
        </SearchButton>
      </Link>
    </SearchContainer>
  );
}
