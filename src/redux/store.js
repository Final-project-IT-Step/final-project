import { configureStore } from "@reduxjs/toolkit";
import { typeTeaApi } from "./typeTeaApi";
import { historyTeaDataApi } from "./historyTeaDataApi";

export const store = configureStore({
    reducer: {
        [typeTeaApi.reducerPath]: typeTeaApi.reducer,
        [historyTeaDataApi.reducerPath]: historyTeaDataApi.reducer
    },
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(typeTeaApi.middleware)
            .concat(historyTeaDataApi.middleware)
});
