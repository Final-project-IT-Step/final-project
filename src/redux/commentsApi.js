import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

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
            query: value => `comments?_start=${ value }&_limit=12`,
            providesTags: (result) => (
                result
                ? [ ...result.map(( { id } ) => ( { type: 'Comments', id } )) , commentsTagObj ]
                : [ commentsTagObj ]
            ),
        }),
        likeComment: build.mutation({
            query: ({ id, totalLikes }) => ({
                url: `comments/${ id }`,
                method: 'PATCH',
                body: { totalLikes: totalLikes + 1 }
            }),
            invalidatesTags: [commentsTagObj]
        }),
        dislikeComment: build.mutation({
            query: ({ id, totalDislikes }) => ({
                url: `comments/${ id }`,
                method: 'PATCH',
                body: { totalDislikes: totalDislikes + 1 }
            }),
            invalidatesTags: [commentsTagObj]
        })
    }),
});

export const { useGetCommentsQuery, useGetCommentsPageQuery, useLikeCommentMutation, useDislikeCommentMutation } = commentsApi;