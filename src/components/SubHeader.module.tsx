import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledSubHeader = styled.div`
  background-color: #c684e3;
  padding: 0.5rem;
  display: flex;
  gap: 1rem;

  .search {
    background-color: white;
    width: 13rem;
  }

  #select-category-label {
    color: #0a0a0a;
  }

  .addNewProduct {
    border: none;
    align-items: center;
    display: flex;
    padding: 0.5rem;
    gap: 0.75rem;

    svg {
      font-size: large;
    }
  }
`;

export const CustomeTextFeild = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0a0a0a",
  },
  "& .MuiFilledInput-root:after": {
    border: "none",
  },
});
