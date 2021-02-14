import React from "react";
import TypeCell from "./HOC/Row/TypeCell";
import BoldCell from "./HOC/Row/BoldCell";

const TableRow = ({ tableRowData }) => {
  return (
    <tr>
      <td>
        <BoldCell>{tableRowData.id}</BoldCell>
      </td>
      <td>
        <BoldCell>{tableRowData.number}</BoldCell>
      </td>
      <td>{tableRowData.customer}</td>
      <td>{tableRowData.status}</td>
      <td>{tableRowData.actual}</td>
      <td>{tableRowData.total}</td>
      <td>
        <TypeCell>{tableRowData.type}</TypeCell>
      </td>
    </tr>
  );
};

export default TableRow;
