import { useUpdateCustomer } from "@/api/mutation/customer";
import { useGetCustomerById } from "@/api/query/customer";
import Loading from "@/component/Loading";
import CustomerForm from "@/component/form/CustomerForm";
import { ICustomer } from "@/interface/type";

import { LoadingButton } from "@mui/lab";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const EditCustomerPage: React.FC = () => {
  const router = useRouter();
  const { editedCustomerId } = router.query;
  const id = editedCustomerId as string;
  const { data, refetch, isLoading: loading } = useGetCustomerById(id);
  const { mutateAsync, isLoading } = useUpdateCustomer();
  const method = useForm<ICustomer>({ values: data });
  React.useEffect(() => {
    if (router.asPath !== router.route) {
      refetch();
    }
  }, [refetch, router]);

  if (loading) return <Loading />;
  if (!data) return <>ERROR</>;

  const onSubmit: SubmitHandler<ICustomer> = (updatedData) => {
    mutateAsync({
      id: data?._id,
      customer: updatedData,
    });
  };

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
        <CustomerForm />
        <ButtonGroup>
          <LoadingButton variant="positive" loading={isLoading} type="submit">
            ثبت
          </LoadingButton>
          <Button variant="negative" onClick={() => router.back()}>
            بازگشت
          </Button>
        </ButtonGroup>
      </Box>
    </FormProvider>
  );
};

export default EditCustomerPage;
