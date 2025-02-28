import { Navigate, Route, Routes } from "react-router-dom";
import { NotFoundScreen } from "../pages/not-found-screen";
import { AppRoute } from "../shared/const";
import { PlanetsPage } from "../pages/planets-page";
import { SpeciesPage } from "../pages/species-page";
import { StarshipsPage } from "../pages/starships-page";
import { AppLayout } from "../shared/layout/navigation-bar";
import { DetailsPlanetPage } from "../pages/details-planet-page";
import { DetailsSpicePage } from "../pages/details-spice-page";
import { DetailsStarshipPage } from "../pages/details-starship-page";

function App() {
  return (
    <Routes>
      <Route path={AppRoute.AppLayout} element={<AppLayout />}>
        <Route index element={<Navigate to={AppRoute.PlanetsPage} />} />

        <Route path={AppRoute.PlanetsPage} element={<PlanetsPage />} />
        <Route path={`${AppRoute.PlanetsPage}/:id`} element={<DetailsPlanetPage />} />

        <Route path={AppRoute.SpeciesPage} element={<SpeciesPage />} />
        <Route path={`${AppRoute.SpeciesPage}/:id`} element={<DetailsSpicePage />} />

        <Route path={AppRoute.StarshipsPage} element={<StarshipsPage />} />
        <Route path={`${AppRoute.StarshipsPage}/:id`} element={<DetailsStarshipPage />} />

        <Route path={AppRoute.NotFoundScreenPages} element={<NotFoundScreen />} />
      </Route>
    </Routes>
  )
}

export default App;
