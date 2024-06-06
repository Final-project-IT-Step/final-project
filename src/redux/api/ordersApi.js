import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data";

export const ordersTagObj = { type: 'Orders', id: 'LIST' };

export const ordersApi = createApi({
    reducerPath: 'Orders',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Orders'],

    endpoints: ( build ) => ({
        setCurrentOrder: build.mutation({
            query: ({ userId, userForm, orderedProducts }) => {
                const { name, middleName, lastname, phoneNumber, email } = userForm

                return {
                    url: `orders`,
                    method: 'POST',
                    body: {
                        userId, 
                        name, 
                        middlename: middleName, 
                        lastname, 
                        phone: phoneNumber, 
                        email, 
                        orderedProducts, 
                        orderStatus: null,
                        verifiedBy: null,
                        giveAwayMethod: 'Самовивіз'
                    }
                }
            },
            invalidatesTags: [ordersTagObj]
        }),
        getOrdersByUser: build.query({
            query: ({ userId }) => `orders?userId=${ userId }`
        }),
    }),
});

export const {
    useSetCurrentOrderMutation,
    useGetOrdersByUserQuery
} = ordersApi;