import { configureStore } from "@reduxjs/toolkit";
import { typeTeaApi } from "./typeTeaApi";
import { historyTeaDataApi } from "./historyTeaDataApi";
import { wisdomTeaApi } from "./wisdomTeaApi";

export const store = configureStore({
    reducer: {
        [typeTeaApi.reducerPath]: typeTeaApi.reducer,
        [historyTeaDataApi.reducerPath]: historyTeaDataApi.reducer,
        [wisdomTeaApi.reducerPath]: wisdomTeaApi.reducer
    },
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(typeTeaApi.middleware)
            .concat(historyTeaDataApi.middleware)
            .concat(wisdomTeaApi.middleware)
});
