import styled from "styled-components";
interface StyleProps {
  isEditProduct?: boolean;
}

export const StyledCardContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  width: ${({ isEditProduct }: props) => (isEditProduct ? "95%" : "435px")};
  align-items: center;
  box-shadow: ${(props) =>
    props.isEditProduct ? "" : "5px 5px 10px -5px rgba(0,0,0,0.5)"};
  padding: 0.5rem;

  img {
    width: ${({ isEditProduct }: props) => (isEditProduct ? "550px" : "150px")};
    height: ${({ isEditProduct }: props) =>
      isEditProduct ? "550px" : "150px"};
  }
  .description,
  .title {
    display: ${({ isEditProduct }: props) =>
      isEditProduct ? "" : "-webkit-box"};
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

  .footer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .ratings,
  .actions {
    display: flex;
    justify-content: space-between;

    button {
      align-items: center;
      padding: 0.5rem;
      display: flex;
      gap: 0.5rem;
    }

    .delete,
    .see-more,
    .edit {
      color: #eb4034;
      font-size: large;
    }
    .see-more,
    .edit {
      color: black;
    }
  }
`;
