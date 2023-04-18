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
