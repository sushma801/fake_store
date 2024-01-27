import { useState } from "react";
import { StyledProductForm } from "./ProductForm.module";
import { useFormik } from "formik";
import { CustomeTextFeild } from "./SubHeader.module";
import { MdDriveFolderUpload } from "react-icons/md";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { addNewProduct, updateExistingProduct } from "../service/API";
import { useLocation, useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";
import { categories } from "../Modals/Constant";

const ProductForm = () => {
  const location = useLocation();
  const initialValues = {
    title: location.state?.title || "",
    category: location.state?.category || "",
    description: location.state?.description || "",
    price: location.state?.price || 0,
    image: location.state?.image || "",
  };

  const navigate = useNavigate();
  const [openAlertBox, setAlertBox] = useState<boolean>(false);
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      let status;
      if (!location.state?.isEditProduct) {
        status = await addNewProduct(values);
      } else {
        const id = location.state?.id;
        status = await updateExistingProduct({ ...values, id });
      }

      status === 200 || status === 201
        ? navigate("/")
        : setAlertBox(!openAlertBox);
    },
  });

  const handleCloseModal = () => {
    setAlertBox(!openAlertBox);
  };

  return (
    <>
      <StyledProductForm>
        <h3>
          {location.state?.isEditProduct
            ? `Edit the product`
            : `Upload a new product`}
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <CustomeTextFeild
            id="title"
            name="title"
            label="Title"
            placeholder="Enter Title"
            size="small"
            variant="filled"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <CustomeTextFeild
            id="description"
            name="description"
            label="Description"
            placeholder="Enter Description of the product"
            size="small"
            variant="filled"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <FormControl variant="filled" className="search">
            <InputLabel id="select-category-label">Category</InputLabel>
            <Select
              id="category"
              name="category"
              labelId="select-category-label"
              placeholder="Category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              {categories.map((category, index) => (
                <MenuItem key={index} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <CustomeTextFeild
            id="price"
            name="price"
            label="Price"
            placeholder="Enter Price of the product"
            size="small"
            variant="filled"
            value={formik.touched ? formik.values.price : ""}
            onChange={formik.handleChange}
          />

          <CustomeTextFeild
            id="image"
            name="image"
            label="Image"
            placeholder="Enter image of the product"
            size="small"
            variant="filled"
            value={formik.values.image}
            onChange={formik.handleChange}
          />

          <button type="submit">
            Submit <MdDriveFolderUpload />
          </button>
        </form>
      </StyledProductForm>
      {openAlertBox && (
        <AlertModal
          open={openAlertBox}
          title="Error"
          content="Somthing went wrong!!!!"
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProductForm;
