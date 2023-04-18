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
              {...register("email", { required: "ایمیل وارد کنید" })}
              error={Boolean(errors.email && errors.email)}
              helperText={errors.email && errors.email.message}
              sx={{ mt: 2 }}
              size="small"
              fullWidth
              placeholder={loginData.emailPlaceholder}
              type="email"
            />

            <OutlinedInput
              {...register("password", { required: "رمز وارد کنید" })}
              error={Boolean(errors.password && errors.password)}
              sx={{ mt: 2 }}
              size="small"
              fullWidth
              placeholder={loginData.passwordPlaceholder}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
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

            <Typography mt={2} variant="label3" display={"block"}>
              {loginData.questionText}
              <Typography
                variant="label2"
                component={Link}
                replace
                sx={{ textDecoration: "none" }}
                color="inherit"
                href={{
                  pathname: routeLinks.register.url,
                }}
              >
                {loginData.questionLinkText}
              </Typography>
            </Typography>
          </Card>
        </Box>
      </Container>
    </form>
  );
};

export default Login;
