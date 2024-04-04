import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiEndPoint = import.meta.env.VITE_PORT || 'http://localhost:3030';

export const boardsApi = createApi({
  reducerPath: 'boardApi',
  tagTypes: ['Boards', 'Lists', 'Tasks', 'History', 'HistoryById'],
  baseQuery: fetchBaseQuery({ baseUrl: `${apiEndPoint}/api` }),
  endpoints: (build) => ({
    getBoards: build.query({
      query: (name) => `${name}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Boards' as const, id })),
              'Boards',
            ]
          : ['Boards'],
    }),
    getTasks: build.query({
      query: (name) => `${name}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tasks' as const, id })),
              'Tasks',
            ]
          : ['Tasks'],
    }),
    getLists: build.query({
      query: (name) => `${name}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Lists' as const, id })),
              'Lists',
            ]
          : ['Lists'],
    }),
    getHistory: build.query({
      query: (name) => `${name}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'History' as const, id })),
              'History',
            ]
          : ['History'],
    }),
    getAllHistoryById: build.query({
      query: (name) => `${name}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'HistoryById' as const, id })),
              'HistoryById',
            ]
          : ['HistoryById'],
    }),
    addBoard: build.mutation({
      query: (body) => ({
        url: 'boards',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteBoard: build.mutation({
      query: (id) => ({
        url: `boards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards'],
    }),
    editBoard: build.mutation({
      query: (body) => ({
        url: `boards/${body.id}`,
        method: 'PATCH',
        body: body.new_title,
      }),
      invalidatesTags: ['Boards'],
    }),
    addList: build.mutation({
      query: (body) => ({
        url: 'lists',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Lists'],
    }),
    editLists: build.mutation({
      query: (body) => ({
        url: `lists/${body.id}`,
        method: 'PATCH',
        body: body.new_listName,
      }),
      invalidatesTags: ['Lists'],
    }),
    deleteLists: build.mutation({
      query: (id) => ({
        url: `lists/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lists'],
    }),
    addTasks: build.mutation({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Boards', 'Lists', 'Tasks', 'History', 'HistoryById'],
    }),
    deleteTasks: build.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards', 'Lists', 'Tasks', 'History', 'HistoryById'],
    }),
    editTasks: build.mutation({
      query: (body) => ({
        url: `tasks/${body.id}`,
        method: 'PATCH',
        body: body.new_task,
      }),
      invalidatesTags: ['Boards', 'Lists', 'Tasks', 'History', 'HistoryById'],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useAddBoardMutation,
  useDeleteBoardMutation,
  useEditBoardMutation,
  useGetListsQuery,
  useAddListMutation,
  useEditListsMutation,
  useDeleteListsMutation,
  useAddTasksMutation,
  useGetTasksQuery,
  useDeleteTasksMutation,
  useEditTasksMutation,
  useGetHistoryQuery,
  useGetAllHistoryByIdQuery,
} = boardsApi;
