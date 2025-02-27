import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../shared/const";

export const starshipsApi = createApi({
  reducerPath: 'starships',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getStarships: builder.query<[], string>({
      query: () => 'starships',
    }),
  }),
})
export const { useGetStarshipsQuery } = starshipsApi;