import { AppBar, Box, Button, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { AppRoute } from "../const";
import { useDispatch } from "react-redux";
import { logout } from "../../entities/auth-api";

export function AppLayout() {
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Stack direction="row" justifyContent="space-between" width="100%">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Solva</Typography>
              <Button color="inherit" onClick={() => dispatch(logout())}>Выйти</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>

      <Stack direction="row" spacing={1} sx={{ height: "100vh" }}>
        <Box>
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
    </>
  )
};