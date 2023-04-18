import { CircularProgress, Box } from "@mui/material";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
        height: "50vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
