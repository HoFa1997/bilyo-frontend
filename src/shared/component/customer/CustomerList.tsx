import { useGetAllCustomers } from "@/api/query/customer";

import {
  TableCell,
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  Typography,
  TableBody,
} from "@mui/material";
import React from "react";

import Loading from "../Loading";

import CustomerListItem from "./CustomerListItem";
import { translateCategory } from "@/utils/traslateTitle";

const ProductList: React.FC = () => {
  const { data, isLoading } = useGetAllCustomers();

  if (isLoading) return <Loading />;
  if (data?.length === 0) return <>NO CUSTOMER</>;
  if (!data) return <>ERROR</>;

  const header = Object.keys(data[0]);

  const headers = header.filter(
    (key) => key !== "_id" && key !== "__v" && key !== "user"
  );

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: (t) => t.palette.grey[200] }}>
            {headers.map((headerTitle) => (
              <TableCell align="center" key={headerTitle}>
                <Typography variant="title4" noWrap>
                  {translateCategory(headerTitle)}
                </Typography>
              </TableCell>
            ))}
            <TableCell align="center">عملیات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((customer) => (
            <CustomerListItem
              key={customer._id}
              customer={customer}
              headers={headers}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
