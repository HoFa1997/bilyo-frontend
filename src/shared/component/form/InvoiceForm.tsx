import React from "react";
import { useFormContext } from "react-hook-form";
import { Box } from "@mui/material";
import { IInvoice } from "@/interface/type";
import { useGetAllCustomers } from "@/api/query/customer";

const InvoiceForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<IInvoice>();

  const { data: customerData, isLoading: customerLoading } =
    useGetAllCustomers();

  return (
    <Box
      pt={5}
      maxWidth={500}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
      color={(t) => t.palette.common.black}
    ></Box>
  );
};

export default InvoiceForm;
