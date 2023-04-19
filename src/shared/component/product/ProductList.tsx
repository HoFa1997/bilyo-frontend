import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Loading from "@/component/Loading";
import { useGetAllProduct } from "@/api/query/product";
import React from "react";
import EmptyWithLable from "../EmptyWithLable";
import ProductListItem from "./ProductListItem";
import ProductHeaderList from "./ProductHeaderList";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const { data, isLoading } = useGetAllProduct();

  if (isLoading) return <Loading />;
  if (!data) return <Loading />;

  if (data?.length === 0)
    return (
      <EmptyWithLable
        text={"شما محصولی اضافه نکرده اید برای اضافه کردن محصول کلیک کنید!"}
      />
    );

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <ProductHeaderList data={data[0]} />
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <ProductListItem key={data._id} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
