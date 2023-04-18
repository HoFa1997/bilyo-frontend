import { featuresData } from '@/data/features';
import { Container, Grid, Typography } from '@mui/material';
import Feature from './components/Feature';

const Features = () => {
  return (
    <Container sx={{ margin: '4rem auto' }}>
      <Typography
        component={'h2'}
        display={'block'}
        pt={2}
        sx={{ fontSize: '2.4rem', marginBottom: '1rem' }}
        variant="display3"
      >
        امکاناتی که ما در اختیار شما قرار می دهیم
      </Typography>
      <Grid container>
        {featuresData.map(
          (feature: { title: string; description: string }, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Feature featureData={feature} indexData={index} />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Features;
