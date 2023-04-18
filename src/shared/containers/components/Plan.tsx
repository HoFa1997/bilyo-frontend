import { IPlanRes } from "@/interface/type";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

interface PlanPropsInterface {
  planData: IPlanRes;
}

const Plan = (props: PlanPropsInterface) => {
  const { planData } = props;
  return (
    <Card
      sx={{
        padding: "1.5rem 1rem",
        minHeight: "450px",
        transition: "1s",
        border: "1px solid rgb(0, 0, 0, 0.07)",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          margin: "1.2rem 0",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {planData.title}
      </Typography>
      <Grid container sx={{ margin: "1rem 0" }}>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
            {planData.price},000
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: "center" }}>تومان / ماهیانه</Typography>
        </Grid>
      </Grid>
      <Button sx={{ background: "#262362", margin: "1em 0" }} fullWidth>
        شروع و استفاده
      </Button>
      <Box>
        <Typography sx={{ margin: "1em 0", fontWeight: "bold" }}>
          ویژگی ها:
        </Typography>
        {planData.options.map((option: string, index) => (
          <Typography
            key={index}
            sx={{ padding: ".4rem" }}
            color={(t) => t.palette.grey[500]}
          >
            {option}
          </Typography>
        ))}
      </Box>
    </Card>
  );
};

export default Plan;
