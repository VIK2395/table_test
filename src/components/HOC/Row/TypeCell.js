import React from "react";

const TypeCell = ({children, ...props}) => {
  if (children === "product") {
    return (
      <div className="cell-content-wrapper">
        <p className="product">{children}</p>
      </div>
    );
  }
  if (children === "company") {
    return (
      <div className="cell-content-wrapper">
        <p className="company">{children}</p>
      </div>
    );
  }
  return children
};

export default TypeCell;
