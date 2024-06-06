import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../data";

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
        addProductInUsersCart: build.mutation({
            query: ({ currentUserId, id, cart }) => {
                const updatedCart = [{ id, total: 1 }, ...cart];

                return {
                    url: `users/${ currentUserId }`,
                    method: 'PATCH',
                    body: { cart: updatedCart }
                }
            },
            invalidatesTags: [usersTagObj]
        }),
        removeProductInUsersCart: build.mutation({
            query: ({ currentUserId, id, cart }) => {
                const updatedCart = cart.filter(element => element.id !== id);

                return {
                    url: `users/${ currentUserId }`,
                    method: 'PATCH',
                    body: { cart: updatedCart }
                }
            },
            invalidatesTags: [usersTagObj]
        }),
        incrementCurrentProductInCart: build.mutation({
            query: ({ currentUserId, id, cart, quantity }) => {
                const updatedCart = cart.map(product => {
                    if (product.id === id) {
                        return { ...product, total: quantity + 1 };
                    }
                    return product;
                });
        
                return {
                    url: `users/${currentUserId}`,
                    method: 'PATCH',
                    body: { cart: updatedCart }
                }
            },
            invalidatesTags: [usersTagObj]
        }),
        decrementCurrentProductInCart: build.mutation({
            query: ({ currentUserId, id, cart, quantity }) => {
                const updatedCart = cart.map(product => {
                    if (product.id === id) {
                        return { ...product, total: quantity - 1 };
                    }
                    return product;
                });
        
                return {
                    url: `users/${currentUserId}`,
                    method: 'PATCH',
                    body: { cart: updatedCart }
                }
            },
            invalidatesTags: [usersTagObj]
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
        clearCart: build.mutation({
            query: ({ userId }) => {

                return {
                    url: `users/${ userId }`,
                    method: 'PATCH',
                    body: { cart: [] }
                }
            },
            invalidatesTags: [usersTagObj]
        }),
        createUser: build.mutation({
            query: ({ newUser }) => {
                const { login, userPassword, phoneNumber, email } = newUser

                return {
                    url: `users`,
                    method: 'POST',
                    body: {
                        userPrivilege: 1,
                        userName: login,
                        email,
                        likedComments: [],
                        dislikedComments: [],
                        password: userPassword,
                        phone: phoneNumber,
                        cart: []
                    }
                }
            },
            invalidatesTags: [ usersTagObj ]
        })
    }),
});

export const { 
    useGetUsersQuery, 
    useGetCurrentUserQuery, 
    useStoreForLikesMutation,
    useRemoveUsersLikeCommentMutation,
    useStoreForDislikesMutation,
    useRemoveUsersDislikeCommentMutation,
    useGetCurrentUserByNicknameQuery,
    useIncrementCurrentProductInCartMutation,
    useDecrementCurrentProductInCartMutation,
    useAddProductInUsersCartMutation,
    useRemoveProductInUsersCartMutation,
    useClearCartMutation,
    useCreateUserMutation
} = usersApi;