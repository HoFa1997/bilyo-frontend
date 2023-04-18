import {
  List,
  ListItem,
  ListItemProps,
  ListProps,
  styled,
} from '@mui/material';

export const NavBarList = styled((props: ListProps) => (
  <List
    component="nav"
    disablePadding
    aria-labelledby="nested-list-subheader"
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

export const NavBarListItem = styled((props: ListItemProps) => (
  <ListItem disablePadding sx={{ display: 'block' }} {...props} />
))(({ theme }) => ({}));
