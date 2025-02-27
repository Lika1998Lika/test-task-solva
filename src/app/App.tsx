import { Route, Routes } from "react-router-dom";
import { NotFoundScreen } from "../pages/not-found-screen";
import { AppRoute } from "../shared/const";
import { PlanetsPage } from "../pages/planets-page";
import { SpeciesPage } from "../pages/species-page";
import { StarshipsPage } from "../pages/starships-page";

function App() {

  return (
    <Routes>
      <Route path={AppRoute.SpeciesPage} element={<SpeciesPage />} />
      <Route path={AppRoute.StarshipsPage} element={<StarshipsPage />} />
      <Route path={AppRoute.PlanetsPage} element={<PlanetsPage />} />
      <Route path={AppRoute.NotFoundScreenPages} element={<NotFoundScreen />} />
    </Routes>
  )
}

export default App;
