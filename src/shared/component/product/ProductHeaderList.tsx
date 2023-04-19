import { IProduct } from "@/interface/type";
import { translateCategory } from "@/utils/traslateTitle";
import { TableRow, TableCell } from "@mui/material";
import { FC } from "react";

interface ProductHeaderListProps {
  data: IProduct;
}

const ProductHeaderList: FC<ProductHeaderListProps> = ({ data }) => {
  const dataKeys = Object.keys(data);

  const headers = dataKeys.filter((key) => key !== "_id" && key !== "__v");
  return (
    <TableRow sx={{ bgcolor: (t) => t.palette.grey[200] }}>
      {headers.map((title) => (
        <TableCell align="center" key={title}>
          {translateCategory(title)}
        </TableCell>
      ))}
      <TableCell align="center">عملیات</TableCell>
    </TableRow>
  );
};

export default ProductHeaderList;
