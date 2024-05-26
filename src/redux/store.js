import { configureStore } from "@reduxjs/toolkit";
import { typeTeaApi } from "./typeTeaApi";
import { historyTeaDataApi } from "./historyTeaDataApi";
import { wisdomTeaApi } from "./wisdomTeaApi";
import { commentsApi } from "./commentsApi";
import { usersApi } from "./usersApi";


export const store = configureStore({
    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer,
        [typeTeaApi.reducerPath]: typeTeaApi.reducer,
        [historyTeaDataApi.reducerPath]: historyTeaDataApi.reducer,
        [wisdomTeaApi.reducerPath]: wisdomTeaApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(commentsApi.middleware)
            .concat(typeTeaApi.middleware)
            .concat(historyTeaDataApi.middleware)
            .concat(wisdomTeaApi.middleware)
            .concat(usersApi.middleware)
});
