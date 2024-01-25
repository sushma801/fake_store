import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  width: 435px;
  align-items: center;
  box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
  padding: 0.5rem;

  img {
    width: 150px;
    height: 150px;
  }
  .description,
  .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .title {
    -webkit-line-clamp: 1;
  }

  span {
    font-weight: 700;
  }
`;
