import { convertDateToPersian } from "@/utils/fun";
import { translateCategory } from "@/utils/traslateTitle";
import {
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Collapse,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/ModeEditRounded";
import ShowIcon from "@mui/icons-material/VisibilityRounded";
import React from "react";
import { IInvoice } from "@/interface/type";
import Link from "next/link";
import { DeleteDialog } from "../DeleteDialog";

interface InvoiceListItemProps {
  header: string[];
  invoice: IInvoice;
}

const ActionCell: React.FC<{
  id: string;
  handleExpandClick: () => void;
}> = ({ id, handleExpandClick }) => (
  <TableCell align="center">
    <Link href={`/dashboard/invoice/${id}`}>
      <IconButton color="warning">
        <EditIcon />
      </IconButton>
    </Link>
    <DeleteDialog
      title={"از حذف این فاکتور مطمئن هستید ؟"}
      alertType={"deletInvoice"}
      id={id}
    />

    <IconButton color="info" onClick={handleExpandClick}>
      <ShowIcon />
    </IconButton>
  </TableCell>
);

const InvoiceListItem: React.FC<InvoiceListItemProps> = ({
  header,
  invoice,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const customerDataById = (invoiceData: IInvoice, invoiceItem: string) => {
    type IInvoices = keyof IInvoice;
    if (invoiceItem === "customer") {
      return `${invoiceData["customer"].first_name} ${invoiceData["customer"].last_name}`;
    }
    if (invoiceItem === "date" || invoiceItem === "dueDate") {
      return convertDateToPersian(invoiceData[invoiceItem]);
    }
    if (invoiceItem === "status") {
      return translateCategory(invoiceData[invoiceItem]);
    }
    if (invoiceItem === "lineItems") {
      return;
    }
    return invoiceData[invoiceItem as unknown as IInvoices];
  };

  return (
    <>
      <TableRow>
        {header.map((header) => (
          <TableCell align="center" key={`${invoice._id}-${header}`}>
            <Typography variant="body5" noWrap>
              {customerDataById(invoice, header)}
            </Typography>
          </TableCell>
        ))}

        <ActionCell id={invoice._id} handleExpandClick={handleExpandClick} />
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {invoice.lineItems.map((i, index) => (
              <Box
                key={i._id}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography pr={2} variant="label1">
                  {`${index + 1}.`}
                </Typography>
                <Typography pr={2} variant="label1">
                  <Typography px={1} variant="label3">
                    نام:
                  </Typography>
                  {i.product.name}
                </Typography>
                <Typography pr={2} variant="label1">
                  <Typography px={1} variant="label3">
                    توضیحات:
                  </Typography>
                  {i.product.description}
                </Typography>
                <Typography pr={2} variant="label1">
                  <Typography px={1} variant="label3">
                    قیمت:
                  </Typography>
                  {i.product.price}
                </Typography>
                <Typography pr={2} variant="label1">
                  <Typography px={1} variant="label3">
                    تعداد:
                  </Typography>
                  {i.quantity}
                </Typography>
                <Typography pr={2} variant="label1">
                  <Typography px={1} variant="label3">
                    جمع کل:
                  </Typography>
                  {i.totalPrice}
                </Typography>
              </Box>
            ))}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
export default InvoiceListItem;
