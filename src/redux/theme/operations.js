import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const operations = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-tracker-backend.p.goit.global/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `user/register`,
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `user/login`,
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: builder.query({
      query: () => 'user/logout',
      providesTags: ['Auth'],
    }),
    getCurrentUserInfo: builder.query({
      query: () => 'user/info',
      providesTags: ['Auth'],
    }),
    updateUserInfo: builder.mutation({
      query: data => ({
        url: `user/update`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

