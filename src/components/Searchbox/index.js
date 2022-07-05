import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import "./style.css";

const Searchbox = ({ onSearchClicked }) => {
  const [searchText, setSearchText] = useState("");

  const handelOnSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handelOnSearch = (searchTxt) => {
    onSearchClicked(searchTxt);
  };

  const clearSearchText = () => {
    setSearchText("");
  };

  const handelOnClear = () => {
    clearSearchText();
    handelOnSearch("");
  };

  const isButtonDisabled = searchText?.trim() !== "" ? false : true;

  return (
    <div className="Searchbox">
      <Input
        value={searchText}
        onChange={handelOnSearchTextChange}
        type="text"
        placeholder="Search"
      />
      <Button onClick={() => handelOnSearch(searchText)}>Search</Button>
      <Button
        disabled={isButtonDisabled}
        onClick={handelOnClear}
        variant={"alert"}
      >
        Clear
      </Button>
    </div>
  );
};

export default Searchbox;
