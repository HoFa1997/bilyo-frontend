import { useAddInvoice } from "@/api/mutation/invoice";
import CustomerPicker from "@/component/CustomerPicker";
import ProductPicker from "@/component/ProductPicker";
import InvoiceForm from "@/component/form/InvoiceForm";
import { Box, Button } from "@mui/material";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IInvoice } from "@/interface/type";

const AddInvoicesPage: React.FC = () => {
  const method = useForm<IInvoice>();
  const { mutateAsync } = useAddInvoice();
  const onSubmit: SubmitHandler<IInvoice> = (data) => {
    mutateAsync(data);
    method.reset();
  };

  return (
    <FormProvider {...method}>
      <Box
        maxWidth={500}
        sx={{ margin: "auto" }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <CustomerPicker />
        <InvoiceForm />
        <ProductPicker />
        <Button
          sx={{ mt: 2 }}
          fullWidth
          variant="contained"
          color="error"
          type="submit"
        >
          اضافه کردن به فاکتور
        </Button>
      </Box>
    </FormProvider>
  );
};

export default AddInvoicesPage;
