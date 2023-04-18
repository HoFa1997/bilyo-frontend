import { Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Typography
      variant="title1"
      component={Link}
      href={"/"}
      color={"inherit"}
      sx={{ textDecoration: "none" }}
    >
      بیلیو
      {/* <Typography pl={1} variant="bodyExtra">
        دستیار شما
      </Typography> */}
    </Typography>
  );
};

export default Logo;
