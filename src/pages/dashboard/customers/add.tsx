import React from "react";

import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useAlert } from "shared/hook/useAlert";
import CustomerForm from "@/component/form/CustomerForm";
import { useAddCustomer } from "@/api/mutation/customer";
import { ICustomer } from "@/interface/type";

const AddCustomerPage: React.FC = () => {
  const { mutateAsync, isLoading } = useAddCustomer();
  const method = useForm<ICustomer>();
  const onSubmit: SubmitHandler<ICustomer> = async (data) => {
    try {
      return mutateAsync(data);
    } finally {
      method.reset();
      handleClick();
    }
  };
  const { componenet, handleClick, handleClose } = useAlert(
    "مشتری با موفقیت اضافه شد",
    "success"
  );

  return (
    <FormProvider {...method}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: 300 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <div onClick={handleClose}>{componenet}</div>
        <CustomerForm />
        <LoadingButton variant="positive" loading={isLoading} type="submit">
          ثبت
        </LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AddCustomerPage;
