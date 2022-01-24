import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Coinranking api from Rapid apis

const cryptHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "d5c75b0f1dmsh0a443d631462b9ap1031bdjsn8f9a2123284b",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
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
