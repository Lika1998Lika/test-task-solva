import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";

export const ArrowBackIcon = (str: string) => {
  return (
    <Stack justifyContent="flex-start" direction="row">
      <IconButton size="small">
        <Link to={str} style={{ textDecoration: "none" }}>
          <ArrowBackIosNewIcon />
        </Link>
      </IconButton>
    </Stack>
  )
};