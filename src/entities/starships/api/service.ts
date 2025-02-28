import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/const";
import { SpeciesType } from "../../species/model/species.type";
import { v4 } from "uuid";

type StarshipsDTO = {
  results: SpeciesType[],
  count: number,
  next: string | null,
  previous: null | string
}

export const starshipsApi = createApi({
  reducerPath: 'starships',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getStarships: builder.query<StarshipsDTO, string>({
      query: () => 'starships',
      transformResponse: (response: StarshipsDTO) => {
        return {
          ...response,
          results: response.results.map((item) => ({ ...item, id: v4() }))
        }
      }
    }),
  }),
})

export const { useGetStarshipsQuery } = starshipsApi;