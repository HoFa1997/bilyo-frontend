import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteIcon from '@mui/icons-material/DeleteOutlineRounded';
import { IconButton } from '@mui/material';
import { useDeleteCustomer } from '@/api/mutation/customer';
import { useDeleteProduct } from '@/api/mutation/product';
import { useDeleteInvoice } from '@/api/mutation/invoice';

interface IDialog {
  title: string;
  alertType: 'deletProduct' | 'deletCustomer' | 'deletInvoice';
  id: string;
  des?: string;
}

export const DeleteDialog: React.FC<IDialog> = ({
  title,
  alertType,
  des,
  id,
}) => {
  const [open, setOpen] = React.useState(false);

  const { mutateAsync: mutateDelProduct } = useDeleteProduct();
  const { mutateAsync: mutateDelCustomer } = useDeleteCustomer();
  const { mutateAsync: mutateDelInvoice } = useDeleteInvoice();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAggree = (id: string) => {
    switch (alertType) {
      case 'deletCustomer':
        mutateDelCustomer(id);
        break;
      case 'deletProduct':
        mutateDelProduct(id);
        break;
      case 'deletInvoice':
        mutateDelInvoice(id);
        break;

      default:
        mutateDelCustomer(id);
        break;
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} disableScrollLock>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        {des && (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {des}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button
            fullWidth
            variant="positive"
            onClick={() => {
              handleAggree(id);
              handleClose();
            }}
          >
            تایید
          </Button>
          <Button fullWidth variant="negative" onClick={handleClose} autoFocus>
            انصراف
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton color="error" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};
