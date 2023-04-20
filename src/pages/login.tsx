import { routeLinks, loginData } from "@/data/index";

import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "@/interface/type";
import { useLogin } from "@/api/mutation/auth";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { mutateAsync, isLoading } = useLogin();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      return mutateAsync(data);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            margin: "auto",
          }}
        >
          <Card sx={{ width: 400, paddingX: 2, paddingY: 3 }}>
            <Typography
              variant="title1"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {loginData.title}
            </Typography>

            <TextField
            {...register("mobile", { required: "وارد کردن شماره الزامی است", pattern: {
              value: /^(\+98|0)?9\d{9}$/,
              message: "لطفا شماره موبایل معتبر وارد کنید"
            } })}
            error={Boolean(errors.mobile && errors.mobile)}
            helperText={errors.mobile && errors.mobile.message}
            sx={{ mt: 2 }}
            size="small"
            fullWidth
            label={loginData.mobilePlaceholder}
            type="text"
          />

            <TextField
            {...register("otp", { required: "وارد کردن کد تایید است"})}
            error={Boolean(errors.otp && errors.otp)}
            helperText={errors.otp && errors.otp.message}
            sx={{ mt: 2 }}
            size="small"
            fullWidth
            label={loginData.otpPlaceholder}
            type="text"
          />

            <LoadingButton
              loading={isLoading}
              type="submit"
              sx={{ mt: 3, fontFamily: "inherit" }}
              fullWidth
              variant="contained"
            >
              <Typography variant="label1">{loginData.textButton}</Typography>
            </LoadingButton>
          </Card>
        </Box>
      </Container>
    </form>
  );
};

export default Login;
