import React from "react";
import Table from "./components/Table/Table";
import tableData from "./utils/tableData";

const columns = [
  {
    dataField: "customer",
    sortable: true,
    filterable: true,
    header: {
      title: "CUSTOMER",
      style: {
        width: "20%",
        textAlign: "center",
        backgroundColor: "yellow",
      }
    },
    cell: {
      defStyle: {
        backgroundColor: "LightSalmon",
        textAlign: "center",
        color: "red",
        fontWeight: 900,
      },
      getCellStyle(cellData) {
        if (cellData === "Taison") {
          return {
            ...this.defStyle,
            backgroundColor: "Azure",
            color: "black",
          }
        }
        return this.defStyle
      },
    },
  },

  {
    dataField: "status",
    sortable: false,
    filterable: false,
    header: {
      title: "STATUS",
      style: {
        width: "20%",
        textAlign: "center",
        backgroundColor: "yellow",
      },
    },
    cell: {
      defStyle: {
        backgroundColor: "Cornsilk",
        textAlign: "center",
        color: "Crimson"
      },
      getCellStyle(cellData) {
        return this.defStyle
      },
    },
  },
];

function App() {
  return (
    <div className="container">
      <Table columns={columns} tableData={tableData} />
    </div>
  )
}

export default App;
