import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/const";
import { SpeciesType } from "../model/species.type";

export const speciesApi = createApi({
  reducerPath: 'species',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getSpecies: builder.query<SpeciesType[], string>({
      query: () => 'species',
    }),
  }),
})
export const { useGetSpeciesQuery } = speciesApi;