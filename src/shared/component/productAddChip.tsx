import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function useChipsArray() {
  const [chipData, setChipData] = React.useState<string[]>([]);

  const handleDelete = (chipToDelete: string) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleAdd = (label: string) => {
    setChipData((chips) => {
      return [...chips, label];
    });
  };

  const resetChip = () => {
    setChipData([]);
  };

  const chipComponenet = (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        minHeight: 50,
      }}
      component="ul"
    >
      {chipData.map((data, ind) => {
        let icon;

        return (
          <ListItem key={ind}>
            <Chip icon={icon} label={data} onDelete={handleDelete(data)} />
          </ListItem>
        );
      })}
    </Paper>
  );

  return { chipComponenet, handleAdd, chipData, resetChip };
}
