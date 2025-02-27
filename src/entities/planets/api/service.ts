import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlanetsType } from "../model/planets.type";
import { BASE_URL } from "../../../shared/const";

type PlanetsDTO = {
  results: PlanetsType[],
  count: number,
  next: string | null,
  previous: null | string
}

export const planetsApi = createApi({
  reducerPath: 'planets',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getPlanets: builder.query<PlanetsDTO, string>({
      query: () => 'planets',
    }),
  }),
})

export const  {useGetPlanetsQuery} = planetsApi;