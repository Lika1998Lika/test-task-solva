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
    getPlanets: builder.query<PlanetsDTO, number>({
      query: (page) => `planets?page=${page + 1}`,
      transformResponse: (response: PlanetsDTO) => {
        return {
          ...response,
          results: response.results.map((item, index) => ({ ...item, id: String(index + 1) }))
        }
      }
    }),

    getPlanetById: builder.query<PlanetsType, string>({
      query: (id: string) => `planets/${id}`,
    }),
  }),
})

export const  {useGetPlanetsQuery, useGetPlanetByIdQuery} = planetsApi;