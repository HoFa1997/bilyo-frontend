import { TableRow, TableCell, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import { DeleteDialog } from "../DeleteDialog";
import EditIcon from "@mui/icons-material/ModeEditRounded";
import { ICustomer } from "@/interface/type";

interface CustomerListItemProps {
  customer: ICustomer;
  headers: string[];
}

const CustomerListItem: React.FC<CustomerListItemProps> = ({
  customer,
  headers,
}) => {
  const ActionCell: React.FC<{ id: string }> = ({ id }) => (
    <TableCell align="center">
      <Link href={`/dashboard/customers/${id}`}>
        <IconButton color="warning">
          <EditIcon />
        </IconButton>
      </Link>
      <DeleteDialog
        title={"از حذف این مشتری مطمئن هستید ؟"}
        alertType={"deletCustomer"}
        id={id}
      />
    </TableCell>
  );
  return (
    <TableRow>
      {headers.map((header) => (
        <TableCell align="center" key={header}>
          <Typography variant="body5" noWrap>
            {customer[header as unknown as keyof ICustomer]}
          </Typography>
        </TableCell>
      ))}
      <ActionCell id={customer._id} />
    </TableRow>
  );
};

export default CustomerListItem;
