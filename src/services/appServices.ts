import {createApi} from '@reduxjs/toolkit/query/react';
import {URLS} from '../constants/urlsConstant';
import {axiosBaseQuery} from '../redux/reduxUtils';

console.log('console from appservice.ts');
const appApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: 'app',
  endpoints: builder => ({
    fetchBusinessList: builder.query<any, void>({
      query: () => ({
        url: URLS.businessList,
        method: 'GET',
      }),
    }),
  }),
});

export const {useFetchBusinessListQuery, useLazyFetchBusinessListQuery} =
  appApi;

export default appApi;
