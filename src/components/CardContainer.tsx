import React, { useState } from "react";
import { IProductInfo } from "../Modals/Product";
import { StyledCardContainer } from "./CardContainer.module";
import { useNavigate } from "react-router-dom";
import {
  MdDelete,
  MdKeyboardDoubleArrowRight,
  MdModeEdit,
} from "react-icons/md";
import { deleteProduct } from "../service/API";
import AlertModal from "./AlertModal";

const CardContainer = ({
  title,
  category,
  image,
  price,
  id,
  description,
  rating,
  isEditProduct,
  handleReload,
}: IProductInfo) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleView = () => {
    if (isEditProduct) {
      navigate(`/add_product`, {
        state: {
          title,
          category,
          image,
          price,
          id,
          description,
          isEditProduct,
        },
      });
    } else {
      navigate(`/show/${id}`);
    }
  };

  const handleDelete = async () => {
    const status = await deleteProduct(`${id}`);
    if (status === 200) {
      setOpenModal(!openModal);
      !!handleReload && handleReload();
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <StyledCardContainer isEditProduct={isEditProduct}>
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
            <button onClick={handleOpenModal}>
              Delete <MdDelete className="delete" />
            </button>
            <button onClick={handleView}>
              {isEditProduct ? (
                <>
                  Edit Product <MdModeEdit className="edit" />
                </>
              ) : (
                <>
                  See Details
                  <MdKeyboardDoubleArrowRight className="see-more" />
                </>
              )}
            </button>
          </div>
        </div>
      </StyledCardContainer>
      {openModal && (
        <AlertModal
          open={openModal}
          content="Are you sure you want to delete this item?"
          title={`Delete ${title}`}
          onCloseModal={handleCloseModal}
          onOpenModal={handleDelete}
        />
      )}
    </>
  );
};

export default CardContainer;
