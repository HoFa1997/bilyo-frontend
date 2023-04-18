import { Card, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';

interface FeaturePropsInterface {
  featureData: {title:string, description:string}
  indexData:number
} 

const Feature = (props: FeaturePropsInterface) => {
  const {featureData, indexData} = props
  return (
    <Card sx={{ padding: "1.5rem 1rem", minHeight: '270px', border: '1px solid rgb(0, 0, 0, 0.07)', margin: '1.5rem .6rem' }}>
      {indexData === 0 && <SettingsIcon sx={{fontSize: '2.2rem', color: '#7F5EFF'}} />}
      {indexData === 1 && <AccessTimeFilledIcon sx={{fontSize: '2.2rem', color: '#7F5EFF'}} />}
      {indexData === 2 && <PaidIcon sx={{fontSize: '2.2rem', color: '#7F5EFF'}} />}
      <Typography sx={{ fontSize: "1.5rem", margin: "1rem 0", fontWeight: 'bold' }}>{featureData.title}</Typography>
      <Typography sx={{ fontSize: "1.09rem", margin: "1rem 0" }} color={(t) => t.palette.grey[500]}>{featureData.description}</Typography>
    </Card>
  )
}

export default Feature