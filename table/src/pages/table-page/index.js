import React from "react";
import { useFetchAllItems } from "../../utills/hooks/useFetchAllItems";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TablePage = () => {
  const data = useFetchAllItems();
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Discount Percentage</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.brand}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.discountPercentage}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TablePage;
