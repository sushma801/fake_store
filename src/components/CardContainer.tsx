import React from "react";
import { IProductInfo } from "../Modals/Product";
import { StyledCardContainer } from "./CardContainer.module";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdKeyboardDoubleArrowRight } from "react-icons/md";

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
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/show/${id}`);
  };

  const handleDelete = () => {};
  return (
    <StyledCardContainer flag={flag}>
      <div className="card-header">
        <h3 className="title">{title}</h3>
        <span></span>
      </div>
      <img src={image} alt={image} className={`image`} />
      <div className="footer">
        <p className="description">
          <span>Description:</span>
          {description}
        </p>
        <div className="ratings">
          <span>Price: {price}</span>
          <span>Rate:{rating?.rate}</span>
        </div>
        <div className="actions">
          <button onClick={handleDelete}>
            Delete <MdDelete className="delete" />
          </button>
          <button onClick={handleView}>
            See Details <MdKeyboardDoubleArrowRight className="see-more" />
          </button>
        </div>
      </div>
    </StyledCardContainer>
  );
};

export default CardContainer;
