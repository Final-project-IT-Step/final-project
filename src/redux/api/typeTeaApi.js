import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data";

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

    }),
});

export const { useGetTypeTeaQuery } = typeTeaApi;