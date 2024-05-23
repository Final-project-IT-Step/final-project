import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

const wisdomTeaTagObj = { type: 'TypeTea', id: 'LIST' };

export const wisdomTeaApi = createApi({
    reducerPath: 'WisdomTea',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['WisdomTea'],

    endpoints: ( build ) => ({

        getWisdomTea: build.query({
            query: () => 'adviceSage',
            providesTags: (result) => (
                result
                    ?   [
                        ...result.map(( { id } ) => ({ type: 'WisdomTea', id })),
                        wisdomTeaTagObj
                        ]
                    :   [ wisdomTeaTagObj ]
            ),
        }),

    }),
});

export const { useGetWisdomTeaQuery } = wisdomTeaApi;