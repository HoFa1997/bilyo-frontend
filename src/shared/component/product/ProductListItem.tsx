import { IProduct } from "@/interface/type";
import { convertDateToPersian } from "@/utils/fun";
import { TableRow, TableCell, IconButton } from "@mui/material";
import React from "react";
import { FC } from "react";
import { DeleteDialog } from "../DeleteDialog";
import Link from "next/link";
import EditIcon from "@mui/icons-material/ModeEditRounded";

interface ProductListItemProps {
  data: IProduct;
}

const ProductListItem: FC<ProductListItemProps> = ({ data }) => {
  const {
    _id,
    name,
    description,
    categories,
    price,
    qty,
    updatedAt,
    createdAt,
  } = data;
  return (
    <TableRow
      key={_id}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        bgcolor: (t) => t.palette.grey[100],
      }}
    >
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{description}</TableCell>
      <TableCell align="center">
        {categories.map((data, index, allarry) => (
          <React.Fragment key={index}>
            {data + (allarry.length !== index + 1 ? "," : "")}
          </React.Fragment>
        ))}
      </TableCell>
      <TableCell align="center">{price.toLocaleString("fa-ir")}</TableCell>
      <TableCell align="center">{qty.toLocaleString("fa-ir")}</TableCell>
      <TableCell align="center">{convertDateToPersian(createdAt)}</TableCell>
      <TableCell align="center">{convertDateToPersian(updatedAt)}</TableCell>
      <TableCell align="center">
        <Link href={`/dashboard/products/${_id}`}>
          <IconButton color="warning">
            <EditIcon />
          </IconButton>
        </Link>
        <DeleteDialog
          title={"از حذف این محصول مطمئن هستید ؟"}
          alertType={"deletProduct"}
          id={_id}
        />
      </TableCell>
    </TableRow>
  );
};

export default ProductListItem;
