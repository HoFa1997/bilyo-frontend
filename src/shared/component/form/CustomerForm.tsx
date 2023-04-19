import { useGetAllState, useGetCityByState } from "@/api/uri/city";

import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ICustomer } from "@/interface/type";

const CustomerForm: React.FC = () => {
  const { data, isLoading } = useGetAllState();
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<ICustomer>();

  const { data: city, mutate } = useGetCityByState();

  React.useEffect(() => {
    mutate(watch("state") ? watch("state") : "تهران");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("state")]);

  return (
    <div>
      <TextField
        {...register("first_name", { required: "وارد کردن نام الزامی است" })}
        helperText={errors.first_name && errors.first_name.message}
        error={!!errors.first_name}
        placeholder="نام"
        type="text"
      />
      <TextField
        {...register("last_name", {
          required: "وارد کردن نام خانوادگی الزامی است",
        })}
        helperText={errors.last_name && errors.last_name.message}
        error={!!errors.last_name}
        placeholder="نام خانوادگی"
        type="text"
      />
      <TextField
        {...register("email", { required: "وارد کردن ایمیل الزامی است" })}
        helperText={errors.email && errors.email.message}
        error={!!errors.email}
        placeholder="ایمیل"
        type="email"
      />
      <TextField
        {...register("phone_number", {
          required: "وارد کردن شماره موبایل الزامی است",
        })}
        helperText={errors.phone_number && errors.phone_number.message}
        error={!!errors.phone_number}
        placeholder="شماره موبایل"
        type="tel"
      />
      <TextField
        {...register("address", {
          required: "وارد کردن آدرس اول الزامی است",
        })}
        helperText={errors.address && errors.address.message}
        error={!!errors.address}
        placeholder="آدرس اول"
        type="text"
      />

      <TextField
        {...register("zip_code", {
          required: "وارد کردن کد پستی الزامی است",
        })}
        helperText={errors.zip_code && errors.zip_code.message}
        error={!!errors.zip_code}
        placeholder="کد پستی"
        type="tel"
      />

      {!isLoading && (
        <TextField
          {...register("state")}
          label="استان"
          type="text"
          select
          defaultValue={data?.data[0].name}
          sx={{ width: 300 }}
        >
          {data?.data.map((city) => (
            <MenuItem key={city.id} value={city.name}>
              {city.name}
            </MenuItem>
          ))}
        </TextField>
      )}
      {city && (
        <TextField
          {...register("city")}
          label="شهرستان"
          defaultValue={city ? city?.data.cities[0].name : ""}
          select
        >
          {city ? (
            city?.data.cities.map((city) => (
              <MenuItem key={city.id} value={city.name}>
                {city.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={""}></MenuItem>
          )}
        </TextField>
      )}
      <TextField
        {...register("date_of_birth", {
          required: "وارد کردن تاریخ تولد الزامی است",
        })}
        helperText={errors.date_of_birth && errors.date_of_birth.message}
        error={!!errors.date_of_birth}
        placeholder="تاریخ تولد"
        type="date"
      />

      {/* <DatePicker
        label="Basic date picker"
        value={value}
       
        onChange={(newValue) => {

          return setValue(newValue);
        }}
      /> */}
    </div>
  );
};

export default CustomerForm;
