import { tokenKey } from "@/api/axios.config";
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
          <MenuItem onClick={() => localStorage.removeItem(tokenKey)}>
            <Typography textAlign="center">پروفایل</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.removeItem(tokenKey);
              push("/");
            }}
          >
            <Typography textAlign="center">خروج</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default LogoutComp;
