import React from "react";

const TableRow = ({ tableRowData, columns }) => {
  return (
    <tr>
      {columns.map((column) => (
        <td
          key={column.dataField}
          style={column.cell.getCellStyle(tableRowData[column.dataField])}
        >
          {tableRowData[column.dataField]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
