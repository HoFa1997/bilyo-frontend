interface TranslatedStrings {
  address: string;
  customer: string;
  status: string;
  totalAmount: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  unpaid: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  state: string;
  city: string;
  zip_code: string;
  date_of_birth: string;
  account_balance: string;
}

const translations: TranslatedStrings = {
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

function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const translateCategory = (category: string) => {
  // @ts-ignore
  return translations[category] || category;
};
