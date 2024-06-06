import { configureStore } from "@reduxjs/toolkit";
import { commentsApi, historyTeaDataApi, novaPoshtaApi, ordersApi, shopTeaApi, typeTeaApi, usersApi, wisdomTeaApi } from "../api";

export const store = configureStore({
    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer,
        [typeTeaApi.reducerPath]: typeTeaApi.reducer,
        [historyTeaDataApi.reducerPath]: historyTeaDataApi.reducer,
        [wisdomTeaApi.reducerPath]: wisdomTeaApi.reducer,
        [shopTeaApi.reducerPath]: shopTeaApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [novaPoshtaApi.reducerPath]: novaPoshtaApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer
    },
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(commentsApi.middleware)
            .concat(typeTeaApi.middleware)
            .concat(historyTeaDataApi.middleware)
            .concat(wisdomTeaApi.middleware)
            .concat(shopTeaApi.middleware)
            .concat(usersApi.middleware)
            .concat(novaPoshtaApi.middleware)
            .concat(ordersApi.middleware)
});
