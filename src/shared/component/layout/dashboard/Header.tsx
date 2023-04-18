import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListSubheader, styled } from "@mui/material";
import { AppBar, Drawer, DrawerHeaderr } from "@/component/base";
import { DashboardData } from "@/data/dashboardData";
import Link from "next/link";
import { convertDateToPersian } from "@/utils/fun";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavBarList, NavBarListItem } from "@/component/baseLayoutComponent";
import { useRouter } from "next/router";
import LogoutComp from "./logout";

import { useValidatorQuery } from "@/api/query/auth";
import { tokenKey } from "@/api/axios.config";

const BoxFlexCenter = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",
}));

interface IHeaderProps {
  children: JSX.Element | JSX.Element[];
}

const HeaderDashboard: React.FC<IHeaderProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [openListItem, setOpenListItem] = React.useState<string>("");
  const { data, isLoading } = useValidatorQuery();
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleClickListItem = (title: string) => {
    setOpenListItem(title === openListItem ? "" : title);
  };
  const { push } = useRouter();
  const today = convertDateToPersian(Date.now());

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        open={openDrawer}
        elevation={0}
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          background: (t) => t.palette.blue[200],
        }}
      >
        <Toolbar sx={{ color: (t) => t.palette.common.black }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(openDrawer && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <BoxFlexCenter flexGrow={1}>
            <Typography variant="title4" pl={3}>
              امروز:
              <Typography px={1} variant="title3">
                {today}
              </Typography>
            </Typography>
          </BoxFlexCenter>
          <LogoutComp
            openDrawer={openDrawer}
            mutate={() => localStorage.removeItem(tokenKey)}
            isLoading={isLoading}
            user={data?.data.message}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={openDrawer}>
        <DrawerHeaderr>
          {openDrawer && (
            <BoxFlexCenter dir="ltr">
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </BoxFlexCenter>
          )}
        </DrawerHeaderr>
        <Divider />
        <NavBarList
          sx={{ flexGrow: 1 }}
          subheader={
            openDrawer && (
              <ListSubheader component="div" id="nested-list-subheader">
                داشبورد مدیریت بیلیو
              </ListSubheader>
            )
          }
        >
          {DashboardData.map((item) => (
            <NavBarListItem key={item.title}>
              <ListItemButton
                onClick={() => {
                  item.link && push(item.link);
                  handleClickListItem(item.title);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: openDrawer ? "initial" : "center",
                  bgcolor: (t) =>
                    openListItem === item.title ? t.palette.violet[50] : "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openDrawer ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: openDrawer ? 1 : 0 }}
                />
                {openDrawer && item.subItem && (
                  <ListItemIcon
                    sx={{
                      justifyContent: "flex-end",
                      opacity: openDrawer ? 1 : 0,
                      minWidth: 0,
                    }}
                  >
                    {openListItem === item.title ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemIcon>
                )}
              </ListItemButton>
              {item.subItem &&
                item.subItem.map((subItem) => (
                  <Link
                    key={subItem.link}
                    href={subItem.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Collapse
                      sx={{
                        bgcolor: (t) =>
                          openListItem === item.title
                            ? t.palette.violet[50]
                            : "none",
                      }}
                      key={subItem.link}
                      in={openListItem === item.title}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: openDrawer ? "initial" : "center",
                            pl: openDrawer ? 4 : "auto",
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: openDrawer ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            {subItem.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={subItem.title}
                            sx={{
                              opacity: openDrawer ? 1 : 0,
                            }}
                          />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </Link>
                ))}
            </NavBarListItem>
          ))}
        </NavBarList>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          pt: 9,
          px: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HeaderDashboard;
