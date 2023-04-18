import { IconButton, Typography } from "@mui/material";
import { FC } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { convertDateToPersian } from "@/utils/fun";
import EditIcon from "@mui/icons-material/ModeEditRounded";
import { DeleteDialog } from "@/component/DeleteDialog";
import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "@/component/Loading";
import { useGetAllProduct } from "@/api/query/product";

const ProductsPage: FC = () => {
  const { pathname } = useRouter();
  const { data, isLoading } = useGetAllProduct();

  if (isLoading) return <Loading />;

  return (
    <>
      {data?.length !== 0 ? (
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: (t) => t.palette.grey[200] }}>
                <TableCell width={150}>نام</TableCell>
                <TableCell width={150}>توضیحات</TableCell>
                <TableCell width={100}>دسته بندی</TableCell>
                <TableCell width={150}>قیمت (تومان)</TableCell>
                <TableCell width={150}>تعداد</TableCell>
                <TableCell width={150}>آخرین بروزرسانی</TableCell>
                <TableCell width={150} align="center">
                  عملیات
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(
                ({
                  _id,
                  name,
                  description,
                  categories,
                  price,
                  updatedAt,
                  qty,
                }) => (
                  <TableRow
                    key={_id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      bgcolor: (t) => t.palette.grey[100],
                    }}
                  >
                    <TableCell>{name}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>
                      {categories.map((data, index, allarry) => (
                        <React.Fragment key={index}>
                          {data + (allarry.length !== index + 1 ? "," : "")}
                        </React.Fragment>
                      ))}
                    </TableCell>
                    <TableCell>{price.toLocaleString("fa-ir")}</TableCell>
                    <TableCell>{qty.toLocaleString("fa-ir")}</TableCell>
                    {/* <TableCell>{convertDateToPersian(updatedAt)}</TableCell> */}
                    <TableCell align="center">
                      <Link href={`/dashboard/products/${_id}`}>
                        <IconButton color="warning">
                          <EditIcon />
                        </IconButton>
                      </Link>
                      {/* <DeleteDialog
                        title={'از حذف این محصول مطمئن هستید ؟'}
                        alertType={'deletProduct'}
                        id={id}
                      /> */}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Link href={`${pathname}/add`}>
          <Typography
            pt={5}
            variant="title2"
            display={"block"}
            textAlign="center"
          >
            شما محصولی اضافه نکرده اید برای اضافه کردن محصول کلیک کنید!
          </Typography>
        </Link>
      )}
    </>
  );
};

export default ProductsPage;
