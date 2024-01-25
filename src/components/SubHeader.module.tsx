import styled from "styled-components";

export const StyledSubHeader = styled.div`
  background-color: #b143e0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;

  .search {
    position: relative;
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
    width: 25rem;
  }
  button {
    position: absolute;
    left: 390px;
    top: 35px;
    border: none;
  }

  input:focus,
  select:focus {
    outline: none;
  }
`;
