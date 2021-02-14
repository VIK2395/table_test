import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeaderRow from "./TableHeaderRow";
import tableData from "../utils/tableData";
import regExpFromString from "../utils/regExpFromString";

const Table = () => {
  const [sortedTableData, setSortedTableData] = useState(tableData);
  const [filteredTableData, setFilteredTableData] = useState(sortedTableData);

  const compare = (key, order = "asc") => {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const A = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const B = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

      if (order === "asc") {
        if (A < B) return -1
        if (A > B) return 1
      }

      if (order === "desc") {
        if (A > B) return -1
        if (A < B) return 1
      }

      return 0;
    };
  };

  const sortData = (by, order) => {
    setSortedTableData([...tableData].sort(compare(by, order)));
  };

  const filterData = (filters) => {
    const filtersArray = Object.entries(filters);

    const filteredTableData = filtersArray.reduce(
      (prevFilteredTableData, [filter, val]) =>
        prevFilteredTableData.filter(
          (tableRow) =>
            tableRow[filter]
              .toString()
              .toLowerCase()
              .search(regExpFromString(val.toLowerCase())) !== -1
        ),
      sortedTableData
    );
    setFilteredTableData(filteredTableData);
  };

  return (
    <table>
      <tbody>
        <TableHeaderRow
          tableHeaderData={Object.keys(tableData[0])}
          sortData={sortData}
          filterData={filterData}
          sortedTableData={sortedTableData}
        />
        {filteredTableData.map((tableRowData) => (
          <TableRow key={tableRowData.id} tableRowData={tableRowData} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
