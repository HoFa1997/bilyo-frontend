import React from "react";

import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IProduct } from "@/interface/type";

const ProductForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IProduct>();

  return (
    <>
      <TextField
        sx={{ my: 1 }}
        required
        label="نام"
        type="text"
        {...register("name", { required: "وارد کردن نام الزامی است" })}
        helperText={errors.name && errors.name.message}
        error={!!errors.name}
      />
      <TextField
        sx={{ my: 1 }}
        required
        label={"توضیحات"}
        {...register("description", {
          required: "وارد کردن توضیحات الزامی است",
        })}
        helperText={errors.description && errors.description.message}
        error={!!errors.description}
      />
      <TextField
        sx={{ my: 1 }}
        required
        label={"قیمت"}
        {...register("price", {
          required: "وارد کردن قیمت الزامی است",
        })}
        helperText={errors.price && errors.price.message}
        error={!!errors.price}
      />
      <TextField
        sx={{ my: 1 }}
        required
        label={"تعداد"}
        {...register("qty", {
          required: "وارد کردن تعداد الزامی است",
        })}
        helperText={errors.qty && errors.qty.message}
        error={!!errors.qty}
      />
    </>
  );
};

export default ProductForm;
