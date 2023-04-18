export const uppercaseFirstPageRoute = (str: string) => {
  const splitedRoute = str.split("/");
  if (!str) return str; // Return empty string or null values unchanged
  return splitedRoute[1].charAt(0).toUpperCase() + splitedRoute[1].slice(1);
};

export const convertDateToPersian = (rawDate: string | number) => {
  const date = new Date(rawDate);
  const timezone = "Asia/Tehran";
  return date.toLocaleDateString("fa-Ir", {
    timeZone: timezone,
  });
};

interface ITraslateKey {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  state: string;
  city: string;
  zip_code: string;
  date_of_birth: string;
  account_balance: string;
  customer: string;
  status: string;
  totalAmount: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  unpaid: string;
}
export const trasnlateObjectKeys: ITraslateKey = {
  first_name: "نام",
  last_name: "نام خانوادگی",
  email: "ایمیل",
  phone_number: "موبایل",
  address: "آدرس",
  state: "استان",
  city: "شهرستان",
  zip_code: "کد پستی",
  date_of_birth: "تاریخ تولد",
  account_balance: "موجودی حساب",
  customer: "مشتری",
  status: "وضعیت",
  totalAmount: "جمع فاکتور",
  invoiceNumber: "شماره فاکتور",
  date: "تاریخ صدور",
  dueDate: "تاریخ انقضا",
  unpaid: "پرداخت نشده",
};
