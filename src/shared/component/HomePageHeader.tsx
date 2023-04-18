import {
  Box,
  BoxProps,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import Image from 'next/image';
import ImgWorkInDesk from '@/public/img/workInDesk.png';
import { FC } from 'react';

const HomePageHeaderComponent = styled(Box)<BoxProps>(({ theme: t }) => ({
  position: 'relative',
  background: t.palette.common.black,
  color: t.palette.common.white,
  overflow: 'hidden',
  ':before': {
    content: `''`,
    position: 'absolute',
    width: 300,
    height: 300,
    filter: 'blur(100px)',
    left: -150,
    top: -150,
    background: t.palette.violet[500],
  },
  ':after': {
    content: `''`,
    position: 'absolute',
    width: 300,
    height: 300,
    filter: 'blur(100px)',
    right: -150,
    bottom: -50,
    background: t.palette.violet[500],
  },
}));

const HomePageHeader: FC = () => {
  return (
    <Box
      position={'relative'}
      overflow={'hidden'}
      sx={{
        ':after': {
          content: `''`,
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: -120,
          width: '150%',
          height: 100,
          background: (t) => t.palette.common.white,
          rotate: '-2deg',
        },
      }}
    >
      <HomePageHeaderComponent pt={5} position={'relative'}>
        <Container>
          <Grid
            my={8}
            container
            columns={{ xs: 1, md: 2 }}
            sx={{ position: 'relative' }}
          >
            <Grid item xs={1} mt={5} textAlign={{ xs: 'center', md: 'left' }}>
              <Typography
                component={'h1'}
                color={(t) => t.palette.grey[300]}
                display={'block'}
                variant="body1"
              >
                مدیریت مشتریان | مدیریت فروش | مدیریت پشتیبانی
              </Typography>
              <Typography
                component={'h2'}
                display={'block'}
                pt={2}
                variant="display3"
              >
                بیلیو دستیار حرفه ای در کنار کسب و کار شما
              </Typography>
              <Typography
                color={(t) => t.palette.grey[100]}
                display={'block'}
                pt={4}
                variant="body1"
              >
                در بیلیو میتوانید به سادگی مشتریان خود را مدیریت کنید و در
                زمینه‌ی فروش و ارتباط با مشتریان توانایی بیشتری داشته باشید.
              </Typography>
              <Grid pt={5}>
                <Button
                  sx={{
                    background: '#7F5EFF',
                    '&:hover': { background: '#29266A' },
                  }}
                >
                  مشاهده قیمت ها
                </Button>
                <Button sx={{ ml: 4 }} variant="text">
                  نمایش دموی عملکرد
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              xs={1}
              textAlign={'center'}
              position={'relative'}
              minHeight={500}
            >
              <Image
                src={ImgWorkInDesk}
                fill
                style={{ objectFit: 'scale-down' }}
                alt="home-page-image"
              />
            </Grid>
          </Grid>
        </Container>
      </HomePageHeaderComponent>
    </Box>
  );
};

export default HomePageHeader;
