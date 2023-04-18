import {
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/ModeEditRounded";
import React from "react";
import { DeleteDialog } from "@/component/DeleteDialog";
import Loading from "@/component/Loading";
import { useGetAllCustomers } from "@/api/query/customer";
import { trasnlateObjectKeys } from "@/utils/fun";
import { ICustomer } from "@/interface/type";

const ListCostumers: React.FC = () => {
  const { data, isLoading, error } = useGetAllCustomers();

  if (isLoading) return <Loading />;
  if (!data) return <Loading />;

  const ActionCell: React.FC<{ id: string }> = ({ id }) => (
    <TableCell align="center">
      <Link href={`/dashboard/customers/${id}`}>
        <IconButton color="warning">
          <EditIcon />
        </IconButton>
      </Link>
      <DeleteDialog
        title={"از حذف این مشتری مطمئن هستید ؟"}
        alertType={"deletCustomer"}
        id={id}
      />
    </TableCell>
  );

  const header = Object.keys(data[0]);
  const headers = header.filter(
    (key) => key !== "id" && key !== "__v" && key !== "user" && key !== "email"
  );

  return (
    <TableContainer component={Paper} elevation={0}>
      {/* <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: (t) => t.palette.grey[200] }}>
            {headers.map((i) => (
              <TableCell align="center" key={i}>
                <Typography variant="title4" noWrap>
                  {trasnlateObjectKeys[i]}
                </Typography>
              </TableCell>
            ))}
            <TableCell align="center">عملیات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableCell align="center" key={`${index}-${header}`}>
                  <Typography variant="body5" noWrap>
                    {item[header]}
                  </Typography>
                </TableCell>
              ))}
              <ActionCell id={item.id} />
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </TableContainer>
  );
};

export default ListCostumers;
