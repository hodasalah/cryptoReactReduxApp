import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Coinranking api from Rapid apis

const cryptHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};
const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;
const createRequest = (url) => ({ url, headers: cryptHeaders });
//like RTK document
export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCrypto: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getExchanges: builder.query({
			query: () => createRequest(`/exchanges`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timePeriod }) =>
				createRequest(
					`/coin/${coinId}/history?timeperiod=${timePeriod}`
				),
		}),
	}),
});
export const {
	useGetCryptoQuery,
	useGetExchangesQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
