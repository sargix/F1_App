import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  return history.length > 2 ? (
    <button
      className="back-button"
      onClick={() => setTimeout(() => history.goBack(), 500)}
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  ) : null;
};

export default BackButton;
