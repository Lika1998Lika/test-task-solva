import { Box, List, ListItem, ListItemButton, ListItemText, Stack } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { AppRoute } from "../const";

export function AppLayout() {
  return (
    <Stack direction="row" spacing={1}>

      <Box sx={{ backgroundColor: "#f0efef" }}>
        <List sx={{ width: 160 }}>
          <ListItem component={NavLink} to={AppRoute.PlanetsPage}>
            <ListItemButton>
              <ListItemText primary='Планеты' />
            </ListItemButton>
          </ListItem>
          <ListItem component={NavLink} to={AppRoute.SpeciesPage}>
            <ListItemButton>
              <ListItemText primary='Специи' />
            </ListItemButton>
          </ListItem>
          <ListItem component={NavLink} to={AppRoute.StarshipsPage}>
            <ListItemButton>
              <ListItemText primary='Звездолеты' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box >

      <Box sx={{ width: "100%", p: 1 }}>
        <Outlet />
      </Box>
    </Stack>
  )
};