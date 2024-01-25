import React from "react";
import { IProductInfo } from "../Modals/Product";
import { StyledCardContainer } from "./CardContainer.module";

const CardContainer = ({
  title,
  category,
  image,
  price,
  id,
  description,
  rating,
  flag,
}: IProductInfo) => {
  return (
    <StyledCardContainer>
      <div className="card-header">
        <h3 className="title">{title}</h3>
        <span></span>
      </div>
      <img
        src={image}
        alt={image}
        className={`image ${flag ? "widder" : ""}`}
      />
      <div className="footer">
        <p className="description">
          <span>Description:</span>
          {description}
        </p>
        <div className="ratings">
          <span>Price: {price}</span>
          <span>Rate:{rating.rate}</span>
        </div>
        <div className="actions">
          <button className="delete">Delete</button>
          <button className="see-more">See Details</button>
        </div>
      </div>
    </StyledCardContainer>
  );
};

export default CardContainer;
