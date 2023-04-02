import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const toDoApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: () => 'todos',
      }),
      getToDoById: builder.query({
        query: (toDoId) => `todos/${toDoId}`,
      })
    }),
});

export const { useGetTodosQuery, useGetToDoByIdQuery } = toDoApi;