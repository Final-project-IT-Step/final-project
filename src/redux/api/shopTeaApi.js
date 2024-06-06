import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data";

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
        changeTotalProductCount: build.mutation({
            query: ({ productId, available, currentTotal }) => {

                return {
                    url: `shopTea/${ productId }`,
                    method: 'PATCH',
                    body: { available: available - currentTotal }
                }
            },
            invalidatesTags: [shopTeaTagObj]
        }),
        updateTotalProductCount: build.mutation({
            query: ({ productId, total }) => {

                return {
                    url: `shopTea/${ productId }`,
                    method: 'PATCH',
                    body: { available: total }
                }
            },
            invalidatesTags: [shopTeaTagObj]
        })
    }),
});

export const { useGetShopTeaQuery, useChangeTotalProductCountMutation, useUpdateTotalProductCountMutation } = shopTeaApi;