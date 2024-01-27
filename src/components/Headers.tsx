import React from "react";
import { StyledHeader } from "./Header.module";

import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";

import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/");
  };
  return (
    <StyledHeader>
      <div className="left">
        <IconButton onClick={handleHomeButton} className="home">
          <ImHome />
        </IconButton>
      </div>
      <IconButton className="user">
        <FaUser />
      </IconButton>
    </StyledHeader>
  );
};

export default Headers;
