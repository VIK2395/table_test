import React from "react";

const BoldCell = ({children, ...props}) => {
  return (
    <div className="cell-content-wrapper">
      <p className="bold">{children}</p>
    </div>
  );
};

export default BoldCell;
