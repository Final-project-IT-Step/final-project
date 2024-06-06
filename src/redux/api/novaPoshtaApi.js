import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { novaPoshtaBaseUrl, novaposhtaApiKey } from '../data';

export const novaPoshtaApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:  novaPoshtaBaseUrl,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (build) => ({
    getRegions: build.query({
      query: () => ({
        url: 'getAreas',
        method: 'POST',
        body: {
          modelName: 'AddressGeneral',
          calledMethod: 'getAreas',
          apiKey: novaposhtaApiKey
        }
      }),
    }),
    getSettlements: build.query({
      query: (RegionRef) => ({
        url: '',
        method: 'POST',
        body: {
          modelName: 'AddressGeneral',
          methodProperties: {
            RegionRef: RegionRef
          },
          calledMethod: 'getSettlements',
          apiKey: novaposhtaApiKey
        },
      }),
    }),
    getWarehouses: build.query({
      query: (cityRef) => ({
        url: '',
        method: 'POST',
        body: {
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityRef: cityRef,
          },
          apiKey: novaposhtaApiKey
        },
      }),
    }),
  }),
});


export const { useGetRegionsQuery, useGetSettlementsQuery, useGetWarehousesQuery } = novaPoshtaApi

