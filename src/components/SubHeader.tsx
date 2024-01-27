import { ChangeEvent, useState } from "react";

import { BiSolidCartAdd } from "react-icons/bi";
import { CustomeTextFeild, StyledSubHeader } from "./SubHeader.module";

import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { categories } from "../Modals/Constant";

interface ISubProps {
  onSearch: (value: string) => void;
  onSelectCategory: (value: string) => void;
}

const SubHeader = ({ onSearch, onSelectCategory }: ISubProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const navigate = useNavigate();

  const handleEnteredValue = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(event.target?.value);
    onSearch(event.target?.value);
  };
  const handleSelecte = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target?.value);
    onSelectCategory(event.target?.value);
  };

  const hanldeAddProduct = () => {
    navigate("/add_product");
  };
  return (
    <StyledSubHeader>
      <CustomeTextFeild
        className="search"
        label="Search"
        variant="filled"
        value={searchValue}
        onChange={handleEnteredValue}
      />

      <FormControl variant="filled" className="search">
        <InputLabel id="select-category-label">Category</InputLabel>
        <Select
          onChange={handleSelecte}
          value={selectedValue}
          labelId="select-category-label"
          placeholder="Category"
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <button className="addNewProduct" onClick={hanldeAddProduct}>
        Add New Product <BiSolidCartAdd />
      </button>
    </StyledSubHeader>
  );
};

export default SubHeader;
