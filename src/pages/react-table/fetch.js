import { useMemo } from "react";
import { useTable } from "react-table";
import { useToken } from "../../hooks/useToken";
import { useHistory } from "../../hooks/useHistory";
import { loginBody } from "../react-query";

import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),

  table: {
    marginTop: theme.spacing(5),
    borderCollapse: "collapse",
    width: "70%",
    
    th: {
      textAlign: "left",
      fontSize:theme.typography.pxToRem(24),
      border: "1px solid #ddd",
      padding: theme.spacing(2),
      backgroundColor: "#04AA6D",
      color: "white",
    },

    td: {
      border: "1px solid #ddd",
      padding: theme.spacing(2),
    },
    
    tr: {
      "&:nth-child(even)": { backgroundColor: "#f2f2f2" },
      ":hover":{backgroundColor: "#ddd"}
    },
  },
}));

// 請用由 useHistory 串接來的資料，做出有每筆資料 id、device.category、device.roomName 這三直行的表格
// 共一頁 15 筆資料就好，不規定樣式
const TableFetchPage = () => {
  const token = useToken(loginBody);
  const { data, isLoading } = useHistory({ limit: 15 }, token);

  // table data
  const tableData = useMemo(
    () =>
      !data
        ? []
        : data.data.map((item) => ({
            id: item.id,
            deviceCategory: item.device.category,
            deviceRoomName: item.device.roomName,
          })),
    [data]
  );

  console.log(tableData);

  // table columns
  const tableColumns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "deviceCategory",
        accessor: "deviceCategory",
      },
      {
        Header: "deviceRoomName",
        accessor: "deviceRoomName",
      },
    ],
    []
  );

  // useTable
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data: tableData, columns: tableColumns });

  return (
    <StyledWrapper>
      <div style={{fontSize:"30px", fontWeight:"700"}}>Fetched Data table</div>
      {!isLoading && (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </StyledWrapper>
  );
};

export default TableFetchPage;
