import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const usersTagObj = { type: 'Users', id: 'LIST' };

export const usersApi = createApi({
    reducerPath: 'Users',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Users'],

    endpoints: ( build ) => ({

        getUsers: build.query({
            query: () => 'users',
            providesTags: (result) => (
                result
                    ?   [
                        ...result.map(( { id } ) => ({ type: 'Users', id })),
                        usersTagObj
                        ]
                    :   [ usersTagObj ]
            ),
        }),

    }),
});

export const { useGetUsersQuery } = usersApi;