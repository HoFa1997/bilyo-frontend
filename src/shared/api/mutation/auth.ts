import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { loginApi, registerApi } from "../uri/auth";
import { ILogin, IRegister } from "@/interface/type";
import { tokenKey } from "../axios.config";

export const useLogin = () => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (login: ILogin) => loginApi(login),
    onSuccess(data) {
      if (!data) return console.log("AUTH FAILD");
      localStorage.setItem(tokenKey, data.token);
      push("/dashboard");
    },
  });
};

export const useRegister = () => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (register: IRegister) => registerApi(register),
    onSuccess(data) {
      if (!data) return console.log("AUTH FAILD");
      localStorage.setItem(tokenKey, data.token);
      push("/dashboard");
    },
  });
};
