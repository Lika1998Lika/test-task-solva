import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/const";
import { SpeciesType } from "../model/species.type";
import {v4} from 'uuid' ;


type SpeciesDTO = {
  results: SpeciesType[],
  count: number,
  next: string | null,
  previous: null | string
}

export const speciesApi = createApi({
  reducerPath: 'species',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getSpecies: builder.query<SpeciesDTO, string>({
      query: () => 'species',
      transformResponse: (response: SpeciesDTO) => {
        return {
          ...response,
          results: response.results.map((item) => ({ ...item, id: v4() }))
        }
      }
    }),
  }),
})
export const { useGetSpeciesQuery } = speciesApi;