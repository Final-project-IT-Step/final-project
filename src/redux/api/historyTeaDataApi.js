import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data";

export const historyTeaTagObj = { type: 'HistoryTea', id: 'LIST' };

export const historyTeaDataApi = createApi({
    reducerPath: 'HistoryTea',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['HistoryTea'],

    endpoints: ( build ) => ({

        getHistoryTeaData: build.query({
            query: () => 'historyTeaData',
            providesTags: (result) => (
                result
                    ?   [
                        ...result.map(( { id } ) => ({ type: 'HistoryTea', id })),
                        historyTeaTagObj
                        ]
                    :   [ historyTeaTagObj ]
            ),
        }),
    }),
});

export const { useGetHistoryTeaDataQuery } = historyTeaDataApi;