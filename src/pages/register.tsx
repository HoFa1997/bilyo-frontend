import { Box, Card, Typography, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { routeLinks, registerData } from "@/data/index";
import { LoadingButton } from "@mui/lab";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegister } from "@/interface/type";
import { useRegister } from "@/api/mutation/auth";

const Register = () => {
  const { query, push } = useRouter();
  const backUrl = (query?.backUrl || "/") as string;

  const { mutateAsync, isLoading } = useRegister();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>();
  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      return mutateAsync(data);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Typography variant="h6" textAlign={"center"}>
            {registerData.title}
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
            label={registerData.mobilePlaceholder}
            type="text"
          />

          <LoadingButton
            loading={isLoading}
            type="submit"
            sx={{ mt: 3, font: "inherit" }}
            fullWidth
            variant="contained"
          >
            {registerData.textButton}
          </LoadingButton>
        </Card>
      </Box>
    </form>
  );
};

export default Register;
