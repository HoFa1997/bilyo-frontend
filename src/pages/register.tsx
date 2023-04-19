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
            {...register("name", { required: "وارد کردن نام الزامی است" })}
            error={Boolean(errors.name && errors.name)}
            helperText={errors.name && errors.name.message}
            sx={{ mt: 2 }}
            size="small"
            fullWidth
            label={registerData.fullNamePlaceHolder}
            type="text"
          />

          <TextField
            {...register("email", { required: "وارد کردن نام الزامی است" })}
            error={Boolean(errors.email && errors.email)}
            helperText={errors.email && errors.email.message}
            sx={{ mt: 2 }}
            size="small"
            fullWidth
            label={registerData.emailPlaceholder}
            type="email"
          />

          <TextField
            {...register("password", { required: "وارد کردن رمز الزامی است" })}
            error={Boolean(errors.password && errors.password)}
            helperText={errors.password && errors.password.message}
            sx={{ mt: 2 }}
            size="small"
            fullWidth
            label={registerData.passwordPlaceholder}
            type="password"
          />

          <TextField
            {...register("password_confirm", {
              required: "وارد کردن رمز الزامی است",
            })}
            error={Boolean(errors.password_confirm && errors.password_confirm)}
            helperText={
              errors.password_confirm && errors.password_confirm.message
            }
            sx={{ mt: 2 }}
            size="small"
            fullWidth
            label={registerData.confrimPasswordPlaceholder}
            type="password"
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

          <Typography mt={2} variant="label3" display={"block"}>
            {registerData.questionText}
            <Typography
              variant="label2"
              component={Link}
              replace
              sx={{ textDecoration: "none" }}
              color="inherit"
              href={{
                pathname: routeLinks.login.url,
              }}
            >
              {registerData.questionLinkText}
            </Typography>
          </Typography>
        </Card>
      </Box>
    </form>
  );
};

export default Register;
