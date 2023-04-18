import { Container, Grid, Typography } from "@mui/material";
import Plan from "./components/Plan";
import PlanPlaceholder from "./components/PlanPlaceholder";
import { IPlanRes } from "@/interface/type";
import { useGetAllPlans } from "@/api/query/homepage";

const Plans = () => {
  const { data, isLoading } = useGetAllPlans();

  return (
    <Container sx={{ margin: "2rem auto" }}>
      <Typography
        id="plans"
        component={"h2"}
        display={"block"}
        pt={2}
        sx={{ fontSize: "2.4rem" }}
        variant="display3"
      >
        لیست پلن ها
      </Typography>

      <Grid container sx={{ margin: "1rem 0" }}>
        {!isLoading
          ? data?.map((plan: IPlanRes, index) => (
              <Grid key={index} item xs={12} sm={3} sx={{ padding: ".4rem" }}>
                <Plan planData={plan} />
              </Grid>
            ))
          : [0, 1, 2, 3].map((item, index) => (
              <Grid key={index} item xs={12} sm={3} sx={{ padding: ".4rem" }}>
                <PlanPlaceholder />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default Plans;
