import { configureStore } from "@reduxjs/toolkit";
import { typeTeaApi } from "./typeTeaApi";
import { historyTeaDataApi } from "./historyTeaDataApi";
<<<<<<< HEAD
import { wisdomTeaApi } from "./wisdomTeaApi";
=======
import { commentsApi } from "./commentsApi";
>>>>>>> ebb250e3014717b71c9f8b746c1f939ac58c4561

export const store = configureStore({
    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer,
        [typeTeaApi.reducerPath]: typeTeaApi.reducer,
        [historyTeaDataApi.reducerPath]: historyTeaDataApi.reducer,
<<<<<<< HEAD
        [wisdomTeaApi.reducerPath]: wisdomTeaApi.reducer
=======
>>>>>>> ebb250e3014717b71c9f8b746c1f939ac58c4561
    },
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(commentsApi.middleware)
            .concat(typeTeaApi.middleware)
            .concat(historyTeaDataApi.middleware)
            .concat(wisdomTeaApi.middleware)
});
