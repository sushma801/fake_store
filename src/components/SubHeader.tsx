import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { StyledSubHeader } from "./SubHeader.module";
import { IDropDown } from "../Modals/Product";

interface ISubProps {
  onSearch: (value: string) => void;
  onSelectCategory: (value: string) => void;
}

const categories: IDropDown[] = [
  { label: `Men`, value: `men's clothing` },
  { label: `Jewelery`, value: `jewelery` },
  { label: `Electronics`, value: `electronics` },
  { label: `Women`, value: `women's clothing` },
];

const SubHeader = ({ onSearch, onSelectCategory }: ISubProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleEnteredValue = (event: Event) => {
    setSearchValue(event.target?.value);
    onSearch(event.target?.value);
  };
  const handleSelecte = (event: Event) => {
    setSelectedValue(event.target?.value);
    onSelectCategory(event.target?.value);
  };
  return (
    <StyledSubHeader>
      <input
        type="text"
        onChange={handleEnteredValue}
        value={searchValue}
        placeholder="Search"
        className="search"
      />
      <button>
        <FaSearch />
      </button>

      <select className="search" onChange={handleSelecte} value={selectedValue}>
        {categories.map((category, index) => (
          <option value={category.value} key={index}>
            {category.label}
          </option>
        ))}
      </select>
    </StyledSubHeader>
  );
};

export default SubHeader;
