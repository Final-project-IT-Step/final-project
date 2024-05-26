import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

const shopTeaTagObj = { type: 'ShopTea', id: 'LIST' };

export const shopTeaApi = createApi({
    reducerPath: 'ShopTea',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['ShopTea'],

    endpoints: ( build ) => ({

        getShopTea: build.query({
            query: () => 'shopTea',
            providesTags: (result) => (
                result
                    ?   [
                        ...result.map(( { id } ) => ({ type: 'ShopTea', id })),
                        shopTeaTagObj
                        ]
                    :   [ shopTeaTagObj ]
            ),
        }),

    }),
});

export const { useGetShopTeaQuery } = shopTeaApi;