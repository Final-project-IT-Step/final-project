import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, basePageLength } from "../data";

export const commentsTagObj = { type: 'Comments', id: 'LIST' };

export const commentsApi = createApi({
    reducerPath: 'Comments',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Comments'],

    endpoints: ( build ) => ({

        getComments: build.query({
            query: () => 'comments',
            providesTags: (result) => (
                result
                ? [ ...result.map(( { id } ) => ( { type: 'Comments', id } )) , commentsTagObj ]
                : [ commentsTagObj ]
            ),
        }),
        getCommentsPage: build.query({
            query: value => `comments?_start=${ value }&_limit=${ basePageLength }`,
            providesTags: (result) => (
                result
                ? [ ...result.map(( { id } ) => ( { type: 'Comments', id } )) , commentsTagObj ]
                : [ commentsTagObj ]
            ),
        }),
        likeComment: build.mutation({
            query: ({ id, userId, currentButtonArr }) => {
                const totalLikes = [...currentButtonArr, userId];
        
                return {
                    url: `comments/${id}`,
                    method: 'PATCH',
                    body: { totalLikes }
                };
            },
            invalidatesTags: [commentsTagObj]
        }),
        removeLikeComment: build.mutation({
            query: ({ currentButtonArr, id, userId }) => {
                const updLikes = currentButtonArr.filter(item => item !== userId)
        
                return {
                    url: `comments/${id}`,
                    method: 'PATCH',
                    body: { totalLikes: updLikes }
                };
            },
            invalidatesTags: [commentsTagObj]
        }),
        dislikeComment: build.mutation({
            query: ({ id, userId, currentButtonArr }) => {
                const totalDislikes = [...currentButtonArr, userId];
        
                return {
                    url: `comments/${id}`,
                    method: 'PATCH',
                    body: { totalDislikes }
                };
            },
            invalidatesTags: [commentsTagObj]
        }),
        removeDislikeComment: build.mutation({
            query: ({ currentButtonArr, id, userId }) => {
                const updDislikes = currentButtonArr.filter(item => item !== userId)
        
                return {
                    url: `comments/${id}`,
                    method: 'PATCH',
                    body: { totalDislikes: updDislikes }
                };
            },
            invalidatesTags: [commentsTagObj]
        }),
        writeComment: build.mutation({
            query: ({ userId, textContent }) => {

                return {
                    url: `comments`,
                    method: 'POST',
                    body: { userId, text: textContent, totalLikes: [], totalDislikes: [] }
                };
            },
            invalidatesTags: [commentsTagObj]
        })
    }),
});

export const { 
    useGetCommentsQuery, 
    useGetCommentsPageQuery,
    useLikeCommentMutation, 
    useDislikeCommentMutation, 
    useRemoveLikeCommentMutation,
    useRemoveDislikeCommentMutation,
    useWriteCommentMutation
} = commentsApi;