import React from "react";
import { Link } from "react-router-dom";

const ButtonDetails = ({ path }) => {
  return (
    <Link className="button-details" to={path}>
      Zobacz szczegóły
    </Link>
  );
};

export default ButtonDetails;
