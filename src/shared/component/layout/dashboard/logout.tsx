import { useLogout } from "@/api/mutation/auth";
import {
  IconButton,
  Box,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  openDrawer: boolean;
  mutate: () => void;
  isLoading: boolean;
  user: string | undefined;
}
const LogoutComp: React.FC<IProps> = ({ user }) => {
  const { mutateAsync } = useLogout();
  const { push } = useRouter();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const DashboardSetting = [
    {
      title: "پروفایل",
      link: "/",
      func: push,
    },
    {
      title: "خروج",
      link: null,
      func: mutateAsync,
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {DashboardSetting.map((setting) => (
            <MenuItem
              key={setting.title}
              // onClick={() => setting.func(setting.link)}
            >
              <Typography textAlign="center">{setting.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default LogoutComp;
