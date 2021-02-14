import React, { useState, useEffect } from "react";

const TableHeaderRow = ({
  tableHeaderData,
  sortData,
  filterData,
  sortedTableData,
}) => {
  const [filters, setFilters] = useState({}); // {filterName: filterValue}
  const [sortConfig, setSortConfig] = useState(null); // {sortBy: "", order: ""}

  const handleChange = (ev) => {
    const val = ev.target.value.trim();

    const filtersCopy = {
      ...filters,
      [ev.target.id]: val,
    };

    if (val === "") delete filtersCopy[ev.target.id];

    setFilters(filtersCopy);
  };

  useEffect(() => {
    if (sortConfig === null) return;
    const {sortBy, order} = sortConfig;
    sortData(sortBy, order)
  }, [sortConfig])

  useEffect(() => {
    filterData(filters);
  }, [filters, sortedTableData]);

  const getClassNameFor = (tableHeader) => {
    if (sortConfig === null) return;
    const {sortBy, order} = sortConfig;
    return sortBy === tableHeader ? order : undefined;
  };

  const updateSortConfig = (toSortBy) => {
    let orderToPut = "asc";
    if (sortConfig !== null) {
      const {sortBy, order} = sortConfig;
      if (sortBy === toSortBy && order === "asc") {
        orderToPut = "desc"
      }
    };
    setSortConfig({
      sortBy: toSortBy,
      order: orderToPut
    }) // fully overwrite
  }

  const handleHeaderClick = (ev) => {
    if (ev.target.tagName !== "TH") return;
    updateSortConfig(ev.target.id);
  };

  const inputSize = 8;

  return (
    <tr>
      <th
        id={tableHeaderData[0]}
        onClick={handleHeaderClick}
        className={getClassNameFor(tableHeaderData[0])}
      >
        {"   "}{tableHeaderData[0]}
        <input
          type="text"
          id={tableHeaderData[0]}
          size={inputSize}
          onChange={handleChange}
        />
      </th>
      <th
        id={tableHeaderData[1]}
        onClick={handleHeaderClick}
        className={getClassNameFor(tableHeaderData[1])}
      >
        {"   "}{tableHeaderData[1]}
        <input
          type="text"
          id={tableHeaderData[1]}
          size={inputSize}
          onChange={handleChange}
        />
      </th>
      <th
        id={tableHeaderData[2]}
        onClick={handleHeaderClick}
        className={getClassNameFor(tableHeaderData[2])}
      >
        {"   "}{tableHeaderData[2]}
        <input
          type="text"
          id={tableHeaderData[2]}
          size={inputSize}
          onChange={handleChange}
        />
      </th>
      <th
        id={tableHeaderData[3]}
        onClick={handleHeaderClick}
        className={getClassNameFor(tableHeaderData[3])}
      >
        {tableHeaderData[3]}
        <input
          type="text"
          id={tableHeaderData[3]}
          size={inputSize}
          onChange={handleChange}
        />
      </th>
      <th
        id={tableHeaderData[4]}
        onClick={handleHeaderClick}
        className={getClassNameFor(tableHeaderData[4])}
      >
        {tableHeaderData[4]}
        <input
          type="text"
          id={tableHeaderData[4]}
          size={inputSize}
          onChange={handleChange}
        />
      </th>
      <th
        id={tableHeaderData[5]}
        onClick={handleHeaderClick}
        className={getClassNameFor(tableHeaderData[5])}
      >
        {tableHeaderData[5]}
        <input
          type="text"
          id={tableHeaderData[5]}
          size={inputSize}
          onChange={handleChange}
        />
      </th>
      <th
        id={tableHeaderData[6]}
        onClick={handleHeaderClick}
        className={getClassNameFor(tableHeaderData[6])}
      >
        {tableHeaderData[6]}
        <input
          type="text"
          id={tableHeaderData[6]}
          size={inputSize}
          onChange={handleChange}
        />
      </th>
    </tr>
  );
};

export default TableHeaderRow;
