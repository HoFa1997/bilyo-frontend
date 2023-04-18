import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavData } from '@/data/index';

const MobileDrawer: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen((ps) => !ps);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NavData.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Button
        sx={{ padding: 0, m: 0 }}
        variant="text"
        onClick={toggleDrawer(true)}
      >
        <MenuRoundedIcon />
      </Button>
      <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileDrawer;
