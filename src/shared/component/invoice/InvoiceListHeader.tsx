import { translateCategory } from "@/utils/traslateTitle";
import { TableCell, Typography } from "@mui/material";

import React from "react";

interface InvoiceListHeaderProps {
  invoiceHeader: string;
}

const InvoiceListHeader: React.FC<InvoiceListHeaderProps> = ({
  invoiceHeader,
}) => {
  return (
    <TableCell align="center">
      <Typography variant="title4" noWrap>
        {translateCategory(invoiceHeader)}
      </Typography>
    </TableCell>
  );
};

export default InvoiceListHeader;
