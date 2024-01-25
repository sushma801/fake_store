import styled from "styled-components";
interface StyleProps {
  flag?: boolean;
}

export const StyledCardContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  width: ${({ flag }: props) => (flag ? "95%" : "435px")};
  align-items: center;
  box-shadow: ${(props) =>
    props.flag ? "" : "5px 5px 10px -5px rgba(0,0,0,0.5)"};
  padding: 0.5rem;

  img {
    width: ${({ flag }: props) => (flag ? "550px" : "150px")};
    height: ${({ flag }: props) => (flag ? "550px" : "150px")};
  }
  .description,
  .title {
    display: ${({ flag }: props) => (flag ? "" : "-webkit-box")};
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
    }

    .delete,
    .see-more {
      color: #eb4034;
      font-size: large;
    }
    .see-more {
      color: black;
    }
  }
`;
