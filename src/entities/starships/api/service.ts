import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/const";
import { StarshipType } from "../model/starships.type";

type StarshipsDTO = {
  results: StarshipType[],
  count: number,
  next: string | null,
  previous: null | string
}

export const starshipsApi = createApi({
  reducerPath: 'starships',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getStarships: builder.query<StarshipsDTO, number>({
      query: (page) => `starships?page=${page + 1}`,
      transformResponse: (response: StarshipsDTO) => {
        return {
          ...response,
          results: response.results.map((item, index) => ({ ...item, id: String(index + 1) }))
        }
      }
    }),

    getStarshipById: builder.query<StarshipType, string>({
      query: (id: string) => `starships/${id}`,
    })
  }),
})

export const { useGetStarshipsQuery, useGetStarshipByIdQuery } = starshipsApi;