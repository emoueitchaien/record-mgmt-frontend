import React from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  TableBody,
  Paper
} from "@material-ui/core";

const DataList = (props) => (
  <TableRow>
    <TableCell>{props.results.productId}</TableCell>
    <TableCell>{props.results.productName}</TableCell>
    <TableCell>{props.results.quantity}</TableCell>
    <TableCell>{props.results.amount}</TableCell>
    <TableCell>{props.results.userName}</TableCell>
    <TableCell>{props.results.userPno}</TableCell>
    <TableCell>
      <button onClick={() => props.handleDelete(props.results._id)}>
        Delete
      </button>
    </TableCell>
  </TableRow>
);

const Results = (props) => {
  const userLabel = props.search === "1" ? "Customer Name" : "Merchant Name";
  const userPno = props.search === "1" ? "Customer Pno" : "Merchant Pno";

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>{userLabel}</TableCell>
              <TableCell>{userPno}</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.results.map((currentdata) => (
              <DataList results={currentdata} handleDelete={props.handleDelete} key={currentdata._id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Results;
