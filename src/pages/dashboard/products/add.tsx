import React from "react";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import useChipsArray from "@/component/productAddChip";
import { useRouter } from "next/router";
import ProductForm from "@/component/form/ProductForm";
import { useCreateProduct } from "@/api/mutation/product";
import { ICreateProduct } from "@/interface/type";

const AddProductsPage: React.FC = () => {
  const { back } = useRouter();
  const { mutateAsync, isLoading } = useCreateProduct();
  const [word, setWord] = React.useState<string>("");
  const { chipComponenet, handleAdd, resetChip, chipData } = useChipsArray();

  const method = useForm<ICreateProduct>();
  const onSubmit: SubmitHandler<ICreateProduct> = async ({
    name,
    description,
    price,
    qty,
  }) => {
    try {
      return await mutateAsync({
        name: name,
        description: description,
        price: price,
        categories: chipData,
        qty: qty,
      });
    } finally {
      method.reset();
      resetChip();
    }
  };

  return (
    <FormProvider {...method}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <Box
          maxWidth={350}
          minHeight={400}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          color={(t) => t.palette.common.black}
        >
          <ProductForm />
          <OutlinedInput
            sx={{ my: 1 }}
            value={word}
            onChange={(e) => setWord(e.target.value)}
            fullWidth
            placeholder={"دسته بندی"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    if (word.length !== 0) {
                      handleAdd(word);
                      setWord("");
                    }
                  }}
                  edge="end"
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
          />

          {chipComponenet}
          <ButtonGroup fullWidth>
            <LoadingButton loading={isLoading} variant="positive" type="submit">
              ذخیره
            </LoadingButton>
            <Button
              onClick={() => {
                method.reset();
                resetChip();
              }}
              variant="negative"
            >
              ریست فرم
            </Button>
            <Button
              onClick={() => {
                back();
              }}
              variant="contained"
            >
              بازگشت
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default AddProductsPage;
