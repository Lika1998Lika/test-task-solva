import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";

type Props = {
  to: string
}
export const ArrowBackIcon = ({ to }: Props) => {
  return (
    <Stack justifyContent="flex-start" direction="row">
      <IconButton size="small">
        <Link to={to} style={{ textDecoration: "none" }}>
          <ArrowBackIosNewIcon />
        </Link>
      </IconButton>
    </Stack>
  )
};