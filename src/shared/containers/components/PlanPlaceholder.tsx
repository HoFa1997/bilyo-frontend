import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Typography, Skeleton } from '@mui/material';

const PlanPlaceholder = () => {
  return (
    <Card sx={{ padding: '1.5rem 1rem' }}>
      <Typography
        sx={{ fontSize: '1.2rem', margin: '1.2rem 0', textAlign: 'center' }}
      >
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Typography>
      <Grid container sx={{ margin: '1rem 0' }}>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            <Skeleton
              variant="text"
              sx={{ fontSize: '1rem', margin: '.3rem' }}
            />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'center' }}>
            <Skeleton
              variant="text"
              sx={{ fontSize: '1rem', margin: '.3rem' }}
            />
          </Typography>
        </Grid>
      </Grid>
      <LoadingButton
        loading
        sx={{ background: '#262362', margin: '1em 0' }}
        fullWidth
      >
        شروع و استفاده
      </LoadingButton>
      <Box>
        <Typography sx={{ margin: '1em 0', fontWeight: 'bold' }}>
          ویژگی ها:
        </Typography>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Box>
    </Card>
  );
};

export default PlanPlaceholder;
