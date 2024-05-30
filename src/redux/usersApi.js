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
        getCurrentUser: build.query({
            query: (id) => `users/${id}`
        }),
        getCurrentUserByNickname: build.query({
            query: (userName) => `users?userName=${ userName }`
        }),
        storeForLikes: build.mutation({
            query: ({ id, userId, currentUserLikesArr }) => {
                const newArr = [...currentUserLikesArr, id];
                const likedComments = Array.from(new Set(newArr))
        
                return {
                    url: `users/${userId}`,
                    method: 'PATCH',
                    body: { likedComments }
                };
            },
            invalidatesTags: [usersTagObj]
        }),
        removeUsersLikeComment: build.mutation({
            query: ({ id, currentUserLikesArr, userId }) => {
                const likedComments = currentUserLikesArr.filter(item => item !== id)
        
                return {
                    url: `users/${userId}`,
                    method: 'PATCH',
                    body: { likedComments }
                };
            },
            invalidatesTags: [usersTagObj]
        }),
        storeForDislikes: build.mutation({
            query: ({ id, userId, currentUsersDislikesComment }) => {
                const newArr = [...currentUsersDislikesComment, id];
                const dislikedComments = Array.from(new Set(newArr))
        
                return {
                    url: `users/${userId}`,
                    method: 'PATCH',
                    body: { dislikedComments }
                };
            },
            invalidatesTags: [usersTagObj]
        }),
        removeUsersDislikeComment: build.mutation({
            query: ({ id, currentUsersDislikesComment, userId }) => {
                const dislikedComments = currentUsersDislikesComment.filter(item => item !== id)
        
                return {
                    url: `users/${userId}`,
                    method: 'PATCH',
                    body: { dislikedComments }
                };
            },
            invalidatesTags: [usersTagObj]
        }),
    }),
});

export const { 
    useGetUsersQuery, 
    useGetCurrentUserQuery, 
    useStoreForLikesMutation,
    useRemoveUsersLikeCommentMutation,
    useStoreForDislikesMutation,
    useRemoveUsersDislikeCommentMutation,
    useGetCurrentUserByNicknameQuery
} = usersApi;