import React from "react";

import loader from "../../images/loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader__img" src={loader} alt="" />
    </div>
  );
};

export default Loader;
