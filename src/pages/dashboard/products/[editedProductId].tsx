import { LoadingButton } from "@mui/lab";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  ButtonGroup,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Loading from "@/component/Loading";
import ProductForm from "@/component/form/ProductForm";
import { useUpdateProduct } from "@/api/mutation/product";
import { useGetProductById } from "@/api/query/product";
import { IProduct } from "@/interface/type";

const EditProductsPage: React.FC = () => {
  const router = useRouter();
  const { editedProductId } = router.query;
  const productId = editedProductId as string;
  const { data, refetch, isLoading, status } = useGetProductById(productId);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [word, setWord] = React.useState<string>("");

  // const { mutate } = useUpdateProduct();
  // React.useEffect(() => {
  //   if (router.asPath !== router.route) {
  //     refetch();
  //   }
  // }, [refetch, router]);

  // React.useEffect(() => {
  //   if (status === "success") {
  //     setCategories(data?.categories);
  //   }
  // }, [data, status]);

  const method = useForm<IProduct>({ values: data });

  // const onSubmit: SubmitHandler<IProduct> = (data) => {
  //   mutate({
  //     productId: data.id,
  //     data: {
  //       name: data.name,
  //       categories: categories,
  //       description: data.description,
  //       price: data.price,
  //       qty: data.qty,
  //     },
  //   });
  // };

  const handleDelete = (chipToDelete: string) => () => {
    setCategories((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleAdd = (label: string) => {
    setCategories((chips) => {
      return [...chips, label];
    });
  };

  if (isLoading) return <Loading />;

  return (
    <FormProvider {...method}>
      {/* <Box
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

          <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
            {categories.map((data, ind) => (
              <Chip key={ind} label={data} onDelete={handleDelete(data)} />
            ))}
          </Stack>
          <ButtonGroup fullWidth>
            <LoadingButton loading={isLoading} variant="positive" type="submit">
              ذخیره تغییرات
            </LoadingButton>
            <Button
              onClick={() => {
                router.back();
              }}
              variant="negative"
              type="submit"
            >
              بازگشت
            </Button>
          </ButtonGroup>
        </Box>
      </Box> */}
    </FormProvider>
  );
};

export default EditProductsPage;
