import React from "react";
import {
  Autocomplete,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useGetAllCustomers } from "@/api/query/customer";
import { ICustomer } from "@/interface/type";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import Loading from "./Loading";

const CustomerPicker: React.FC = () => {
  const { setValue } = useFormContext<{ customer: { id: string } }>();

  const [selectedInvoice, setSelectedInvoice] = React.useState<ICustomer>();

  const { data: customerData, isLoading } = useGetAllCustomers();

  if (isLoading) return <Loading />;
  if (!customerData) return <>ERROR</>;

  const handleInvoiceChange = (newValue: ICustomer | undefined) => {
    if (newValue) {
      setValue("customer", {
        id: newValue._id,
      });
      setSelectedInvoice(newValue);
    }
  };

  const CustomerKeyTypo: React.FC<{ text: string }> = ({ text }) => (
    <Typography variant="label3">{text + " : "}</Typography>
  );

  const CustomerValueTypo: React.FC<{ text: string }> = ({ text }) => (
    <Typography variant="label1">{text}</Typography>
  );

  return (
    <>
      <Autocomplete
        options={customerData}
        getOptionLabel={(customer) =>
          `${customer.first_name}-${customer.last_name}-${customer.phone_number}`
        }
        value={selectedInvoice}
        onChange={() => handleInvoiceChange(selectedInvoice)}
        renderInput={(params) => <TextField {...params} label="انتخاب مشتری" />}
      />
      {selectedInvoice && (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
          <Paper
            elevation={1}
            sx={{ mt: 2, bgcolor: (t) => t.palette.grey[50], opacity: 0.8 }}
          >
            <List>
              <ListItem>
                <CustomerKeyTypo text={"نام و نام خانوادگی"} />
                <CustomerValueTypo
                  text={`${selectedInvoice.first_name} ${selectedInvoice.last_name}`}
                />
              </ListItem>
              <ListItem>
                <CustomerKeyTypo text="ایمیل" />
                <CustomerValueTypo text={selectedInvoice.email} />
              </ListItem>
              <ListItem>
                <CustomerKeyTypo text="آدرس" />
                <CustomerValueTypo text={selectedInvoice.address} />
              </ListItem>
              <ListItem>
                <CustomerKeyTypo text="موبایل" />
                <CustomerValueTypo text={selectedInvoice.phone_number} />
              </ListItem>
              <ListItem>
                <CustomerKeyTypo text="استان - شهرستان" />
                <CustomerValueTypo
                  text={`${selectedInvoice.state} ${selectedInvoice.city}`}
                />
              </ListItem>
            </List>
          </Paper>
        </motion.div>
      )}
    </>
  );
};

export default CustomerPicker;
