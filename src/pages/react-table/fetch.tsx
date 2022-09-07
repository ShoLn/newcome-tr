import { useMemo } from "react";
import { useSortBy, useTable, useGlobalFilter,TableOptions, Column } from "react-table";
import { useToken } from "../../hooks/useToken";
import { useHistory } from "../../hooks/useHistory";
import { loginBody } from "../react-query";

import { styled, TextField, Typography } from "@mui/material";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { borderColor } from "@mui/system";

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: theme.spacing(10),
  marginTop: theme.spacing(10),
  width: "80%",

  ".global-search": {
    marginTop: theme.spacing(3),
    width: "100%",
  },

  table: {
    marginTop: theme.spacing(1),
    borderCollapse: "collapse",
    width: "100%",

    th: {
      position: "relative",
      textAlign: "left",
      fontSize: "1.2rem",
      border: "1px solid #ddd",
      padding: theme.spacing(2),
      backgroundColor: "#04AA6D",
      color: "white",

      span: {
        position: "absolute",
        marginLeft: theme.spacing(2),
      },
    },

    td: {
      border: "1px solid #ddd",
      padding: theme.spacing(2),
    },

    tr: {
      ":nth-of-type(even)": { backgroundColor: "#f2f2f2" },
      ":hover": { backgroundColor: "#ddd" },
    },
  },
}));

const CssTextField = styled(TextField)({
  ".MuiInputLabel-root": {
    color: "#04AA6D",
  },
  ".MuiOutlinedInput-root": {
    color: "#04AA6D",

    fieldset: {
      borderColor: "red",
    },
  },
});

// 請用由 useHistory 串接來的資料，做出有每筆資料 id、device.category、device.roomName 這三直行的表格
// 共一頁 15 筆資料就好，不規定樣式
const TableFetchPage = () => {
  const token = useToken(loginBody);
  const { data, isLoading, isError } = useHistory({ limit: 15 }, token);

  type Cols = {id:string, deviceCategory:string | null, deviceRoomName:string | null}
  // table data
  const tableData:Cols[] = useMemo(
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

  // table columns
  const tableColumns: Column<Cols>[] = useMemo(
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

  const option:TableOptions<Cols> = { data: tableData, columns: tableColumns }
  // useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    option,
    useGlobalFilter,
    useSortBy
  );

  // global filter
  const { globalFilter } = state;

  return (
    <StyledWrapper>
      <div style={{ fontSize: "30px", fontWeight: "700" }}>
        Fetched Data table
      </div>
      {data ? (
        <>
          <div className="global-search">
            <CssTextField
              size="small"
              label="Global Seacrch"
              value={globalFilter}
              onChange={(e) => {
                setGlobalFilter(e.target.value);
              }}
            />
          </div>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <KeyboardDoubleArrowDownRoundedIcon />
                          ) : (
                            <KeyboardDoubleArrowUpRoundedIcon />
                          )
                        ) : (
                          <SortRoundedIcon />
                        )}
                      </span>
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
        </>
      ) : (
        !isError? (<div>Loading.......</div>)
        : (<Typography color="error">Error!</Typography>)
      )}
    </StyledWrapper>
  );
};

export default TableFetchPage;
