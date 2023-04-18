import { trasnlateObjectKeys } from "@/utils/fun";
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
        {/* {trasnlateObjectKeys[invoiceHeader]} */}
      </Typography>
    </TableCell>
  );
};

export default InvoiceListHeader;
