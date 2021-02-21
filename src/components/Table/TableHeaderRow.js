import React, { useState, useEffect } from "react";

const TableHeaderRow = ({
  sortData,
  filterData,
  sortedTableData,
  columns,
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
    const { sortBy, order } = sortConfig;
    sortData(sortBy, order);
  }, [sortConfig]);

  useEffect(() => {
    filterData(filters);
  }, [filters, sortedTableData]);

  const getClassNameFor = (tableHeader) => {
    if (sortConfig === null) return;
    const { sortBy, order } = sortConfig;
    return sortBy === tableHeader ? order : undefined;
  };

  const updateSortConfig = (toSortBy) => {
    let orderToPut = "asc";
    if (sortConfig !== null) {
      const { sortBy, order } = sortConfig;
      if (sortBy === toSortBy && order === "asc") {
        orderToPut = "desc";
      }
    }
    setSortConfig({
      sortBy: toSortBy,
      order: orderToPut,
    }); // fully overwrite
  };

  const handleHeaderClick = (ev) => {
    if (ev.target.tagName !== "TH") return;
    updateSortConfig(ev.target.id);
  };

  return (
    <tr>
      {columns.map((column) => (
        <th
          key={column.dataField}
          id={column.dataField}
          onClick={column.sortable ? handleHeaderClick : undefined}
          className={
            column.sortable
              ? getClassNameFor(column.dataField)
              : undefined
          }
          style={column.header.style}
        >
          {column.header.title}
          <br />
          {column.filterable && (
            <input type="text" id={column.dataField} onChange={handleChange} />
          )}
        </th>
      ))}
    </tr>
  );
};

export default TableHeaderRow;
