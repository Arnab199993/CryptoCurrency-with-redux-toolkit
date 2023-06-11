import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { CryptoAPi } from "../Redux/CryptoApi"
// import { CryptoNewsApi } from "./CryptoNewsApi";
const Store = configureStore({
    reducer: {
        [CryptoAPi.reducerPath]: CryptoAPi.reducer,
        // [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(CryptoAPi.middleware,), //CryptoNewsApi.middleware

})
export default Store