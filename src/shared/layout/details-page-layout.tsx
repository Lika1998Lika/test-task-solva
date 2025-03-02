import { Box, Container } from "@mui/material";
import { ArrowBackIcon } from "../lib/arrow-back-icon";
import { ReactNode } from "react";

type Props = {
  backPath: string;
  children: ReactNode
}
export function DetailsPageLayout({ children, backPath }: Props) {
  return (
    <Container sx={{ height: "100vh", mt: 4 }}>
      <ArrowBackIcon to={backPath} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, margin: "auto" }}>
        {children}
      </Box>
    </Container>
  )
}