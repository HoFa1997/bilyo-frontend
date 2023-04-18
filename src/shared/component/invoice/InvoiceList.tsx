import { useGetAllInvoice } from "@/api/query/invoice";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import Loading from "../Loading";
import InvoiceListHeader from "./InvoiceListHeader";
import InvoiceListItem from "./InvoiceListItem";

const InvoiceList: React.FC = () => {
  const { data, isLoading } = useGetAllInvoice();

  if (isLoading) return <Loading />;

  if (data?.length === 0) return <>NO INVOICE</>;

  // const header = Object?.keys(data[0]);

  // const headers = header.filter(
  //   (key) =>
  //     key !== 'id' && key !== '__v' && key !== 'user' && key !== 'lineItems'
  // );

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: (t) => t.palette.grey[200] }}>
            {/* {headers.map((headerTitle) => (
              <InvoiceListHeader
                key={headerTitle}
                invoiceHeader={headerTitle}
              />
            ))} */}
            <TableCell align="center">عملیات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((invoice, index) => (
            <InvoiceListItem key={index} header={headers} invoice={invoice} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceList;
