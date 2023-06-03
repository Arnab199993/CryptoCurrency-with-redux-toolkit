
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoAPiHeaders = {
    'X-RapidAPI-Key': '99f8acde77msh1fcb54a73f20b95p1fc387jsn536bf9dab616',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}
const baseUrl = ('https://coinranking1.p.rapidapi.com')
const createRequest = (url) => ({ url, headers: CryptoAPiHeaders })

export const CryptoAPi = createApi({
    reducerpPath: "CryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        GetCryptos: builder.query({
            // query: (count) => createRequest(`/coins?limit=${count}`)
            query: (count) => createRequest(`/coins`)
        })
    })
})
export const { useGetCryptosQuery } = CryptoAPi;



// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
// headers: {
//     'X-RapidAPI-Key': '99f8acde77msh1fcb54a73f20b95p1fc387jsn536bf9dab616',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };