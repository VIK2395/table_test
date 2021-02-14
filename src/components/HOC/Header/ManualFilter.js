import React from "react";

const ManualFilter = ({ children, ...props }) => {
  return (
    <div
      id={props.id}
      className={`cell-content-wrapper ${props.getClassNameFor(props.id)}`}
      onClick={props.handleHeaderClick}
    >
      {children}
      <input
        type="text"
        id={props.id}
        size={props.size}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default ManualFilter;
