import { configureStore } from "@reduxjs/toolkit";
import { planetsApi } from "../../entities/planets";
import { speciesApi } from "../../entities/species/api/service";
import { starshipsApi } from "../../entities/starships/api/service";

export const store = configureStore({
  reducer: {
    [planetsApi.reducerPath]: planetsApi.reducer,
    [speciesApi.reducerPath]: speciesApi.reducer,
    [starshipsApi.reducerPath]: starshipsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(
      planetsApi.middleware, 
      speciesApi.middleware, 
      starshipsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;