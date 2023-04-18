import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { logoutApi, loginApi } from "../uri/auth";
import { ILogin } from "@/interface/type";

export const useLogout = () => {
  const { push } = useRouter();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutApi,
    onSuccess() {
      push("/");
    },
  });
};

export const useLogin = () => {
  const { push } = useRouter();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (login: ILogin) => loginApi(login),
    onSuccess() {
      push("/dashboard");
    },
  });
};
