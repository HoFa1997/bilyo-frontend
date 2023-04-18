import React from "react";
import {
  Autocomplete,
  IconButton,
  Input,
  List,
  ListItem,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { useGetAllProduct } from "@/api/query/product";
import { IInvoice, IInvoiceLineItem, IProduct } from "@/interface/type";

const ProductPicker: React.FC = () => {
  interface requestCreatInvoice {
    product: string;
    quantity: number;
  }
  const { setValue } = useFormContext<IInvoice>();
  const [productNum, setProductNum] = React.useState<number>(0);
  const [selectedProduct, setSelectedInvoice] = React.useState<IProduct | null>(
    null
  );

  const [productArry, setProducArry] = React.useState<requestCreatInvoice[]>(
    []
  );
  React.useEffect(() => {
    setValue("lineItems", productArry as unknown as IInvoiceLineItem[]);
  }, [productArry, setValue]);

  React.useEffect(() => {
    setProductNum(0);
    setSelectedInvoice(null);
  }, [productArry]);

  const handleProductChange = (
    event: React.SyntheticEvent,
    newValue: IProduct | null
  ) => {
    setSelectedInvoice(newValue);
  };

  // const handleProductAdd = () => {
  //   setProducArry((ps) => [
  //     ...ps,
  //     {
  //       product: selectedProduct.id,
  //       quantity: productNum,
  //     },
  //   ]);
  // };

  const { data: productData, isLoading: productLoading } = useGetAllProduct();

  const CustomerKeyTypo: React.FC<{ text: string }> = ({ text }) => (
    <Typography variant="label3">{text + " : "}</Typography>
  );

  const CustomerValueTypo: React.FC<{ text: string }> = ({ text }) => (
    <Typography variant="label1">{text}</Typography>
  );

  return (
    <>
      {/* {productLoading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <Autocomplete
          options={productData}
          getOptionLabel={(product) => `${product.name}-${product.price}`}
          value={selectedProduct}
          onChange={handleProductChange}
          renderInput={(params) => (
            <TextField {...params} label="انتخاب محصول" />
          )}
        />
      )} */}
      {selectedProduct && (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
          <Paper
            elevation={1}
            sx={{ mt: 2, bgcolor: (t) => t.palette.grey[50], opacity: 0.8 }}
          >
            <List>
              <ListItem>
                <CustomerKeyTypo text={"نام"} />
                <CustomerValueTypo text={selectedProduct.name} />
              </ListItem>
              <ListItem>
                <CustomerKeyTypo text="توضیحات" />
                <CustomerValueTypo text={selectedProduct.description} />
              </ListItem>
              <ListItem>
                <CustomerKeyTypo text="قیمت" />
                <CustomerValueTypo text={`${selectedProduct.price}`} />
              </ListItem>
            </List>
          </Paper>
        </motion.div>
      )}
      {/* <Input
        endAdornment={
          <IconButton onClick={() => handleProductAdd()}>+</IconButton>
        }
        sx={{ mt: 2 }}
        fullWidth
        type="number"
        value={productNum}
        onChange={(e) => setProductNum(+e.target.value)}
      /> */}
    </>
  );
};

export default ProductPicker;
