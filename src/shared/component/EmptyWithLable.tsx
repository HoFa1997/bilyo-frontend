import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface EmptyWithLableProps {
  text: string;
}

const EmptyWithLable: FC<EmptyWithLableProps> = ({ text }) => {
  const { pathname } = useRouter();

  return (
    <Link href={`${pathname}/add`}>
      <Typography pt={5} variant="title2" display={"block"} textAlign="center">
        {text}
      </Typography>
    </Link>
  );
};

export default EmptyWithLable;
