import React from "react";

const Error = ({ error }) => {
  return (
    <div className="error">
      <h1 className="error__h1">{error}</h1>
    </div>
  );
};

export default Error;
