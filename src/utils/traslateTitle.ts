const translations: any = {
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
  name: "نام",
  description: "توضیحات",
  categories: "دست بندی",
  price: "قیمت",
  qty: "تعداد انبار",
  createdAt: "ساخته شده",
  updatedAt: "بروزرسانی",
};

function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const translateCategory = (category: string) => {
  return translations[category] || category;
};
