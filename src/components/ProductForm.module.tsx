import styled from "styled-components";

export const StyledProductForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;

  h3 {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  button {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 6rem;
    padding: 0.5rem;
    align-items: center;
    align-self: center;

    svg {
      font-size: large;
    }
  }
`;
