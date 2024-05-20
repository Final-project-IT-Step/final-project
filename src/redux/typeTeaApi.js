import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

const typeTeaTagObj = { type: 'TypeTea', id: 'LIST' };

export const typeTeaApi = createApi({
    reducerPath: 'TypeTea',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['TypeTea'],

    endpoints: ( build ) => ({

        getTypeTea: build.query({
            query: () => 'typeTea',
            providesTags: (result) => (
                result
                    ?   [
                        ...result.map(( { id } ) => ({ type: 'TypeTea', id })),
                        typeTeaTagObj
                        ]
                    :   [ typeTeaTagObj ]
            ),
        }),

        addTypeTea: build.mutation({
            query: (body) => ({
                url: 'typeTea',
                method: 'POST',
                body,
            }),
            invalidatesTags: [ typeTeaTagObj ]
        }),

        delTypeTea: build.mutation({
            query: (id) => ({
                url: `typeTea/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'TypeTea', id }],
        }),

        editTypeTea: build.mutation({
            query: ({ id, ...body }) => ({
                url: `typeTea/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'TypeTea', id }],
        }),
    }),
});

export const { useGetTypeTeaQuery, useAddTypeTeaMutation, useDelTypeTeaMutation, useEditTypeTeaMutation } = typeTeaApi;