import {
  AppBar,
  Box,
  BoxProps,
  Button,
  Container,
  Toolbar,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavData, routeLinks } from '@/data/index';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { motion } from 'framer-motion';
import Logo from '@/component/Logo';
import MobileDrawer from './MobileDrawer';

const NavItem = styled((props: BoxProps) => (
  <Box justifyContent={{ xs: 'center', md: 'flex-start' }} {...props} />
))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: 'inherit',
}));

const Header: FC = () => {
  const router = useRouter();

  const NavItems = NavData.map((item) => (
    <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
      <Typography
        px={2}
        sx={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: (t) =>
            router.pathname === item.link
              ? 'inherit'
              : alpha(t.palette.common.white, 0.9),
          ':hover': {
            color: (t) => t.palette.grey[200],
          },
        }}
        variant="title3"
      >
        <ScrollLink to={item.link} smooth={true} duration={500}>
          {item.name}
        </ScrollLink>
      </Typography>
    </motion.div>
  ));

  return (
    <AppBar
      position="absolute"
      elevation={0}
      color="transparent"
      sx={{ pt: 2 }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            color: (t) => t.palette.common.white,
          }}
        >
          <NavItem order={{ xs: 2, md: 1 }} flexGrow={{ xs: 1, md: 0 }}>
            <Logo />
          </NavItem>
          <NavItem
            ml={3}
            order={{ xs: 1, md: 2 }}
            flexGrow={{ md: 1, xs: 0 }}
            display={{ xs: 'none', md: 'flex' }}
          >
            {NavItems}
          </NavItem>
          <NavItem
            order={{ xs: 1, md: 2 }}
            flexGrow={{ md: 1, xs: 0 }}
            display={{ xs: 'flex', md: 'none' }}
          >
            <MobileDrawer />
          </NavItem>
          <NavItem order={{ xs: 3, md: 3 }}>
            <Button variant="text" sx={{ p: 0, mr: 2 }}>
              <CallRoundedIcon fontSize="large" />
            </Button>
            <Link href={routeLinks.dashboard.url}>
              <Button variant="gold">{routeLinks.dashboard.title}</Button>
            </Link>
          </NavItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
