
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoNewsAPiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '99f8acde77msh1fcb54a73f20b95p1fc387jsn536bf9dab616',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = ('https://bing-news-search1.p.rapidapi.com')
const createRequest = (url) => ({ url, headers: CryptoNewsAPiHeaders })

export const CryptoNewsApi = createApi({
    reducerpPath: "CryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        GetCryptoNews: builder.query({
            query: ({ newsCategory }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`)
        })
    })
})
export const { useGetCryptoNewsQuery } = CryptoNewsApi;



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