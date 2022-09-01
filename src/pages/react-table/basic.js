import { useMemo } from "react";
import { useTable } from "react-table";

import Box from "@mui/material/Box";
/*
  React Table 簡介：
  以 hook 的形式，幫我們產生表格的所有格子，它藉由管理每個格子元件的 value 與 props，並以此來幫我做到表格的 搜尋、排序、分組、分頁 等功能。學習起來相對困難一點，需多花一點時間適應。
  但要自己手刻具有以上功能並能動態渲染、重複利用的表格，是非常困難並吃經驗的，且必定會經歷多次重構 非常耗時間，所以學習此套件絕對有價值，尤其想要因應各業種各情況做出不同表格的應用程式，此套件將是很關鍵的。

  特別名詞說明： 表格分為表頭(table head)與表身(table body)，而各橫列與格子 其名詞如下

  |          column(header)         |          column(header)         |   <- headerGroup(headers) ┬ Table head
  | column(header) | column(header) | column(header) | column(header) |   <- headerGroup(headers) ┘
  |  column(cell)  |  column(cell)  |  column(cell)  |  column(cell)  |   <- row(cells) ┐
  |  column(cell)  |  column(cell)  |  column(cell)  |  column(cell)  |   <- row(cells) ├ Table body
  |  column(cell)  |  column(cell)  |  column(cell)  |  column(cell)  |   <- row(cells) ┘

  在官方文件中的 column 大部分都在指 header
*/

// https://react-table-v7.tanstack.com/docs/quick-start
// 請跟著上面官方範例連結 跟著做出最簡單的表格

const TableBasicPage = () => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Box sx={{ pt: "2rem" }}>
      Basic Table // apply the table props
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
    </Box>
  );
};

export default TableBasicPage;
