import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f8572d783c1d0017c446a1.mockapi.io/",
  }),
  reducerPath: "contactsApi",
  tagTypes: ["Contacts", "Users"],
  endpoints: (build) => ({
    // getUsers: build.query({
    //   query: () => `users/`,
    //   providesTags: ["Contacts"],
    // }),
    getUserById: build.query({
      query: (id) => `users/${id}`,
      providesTags: ["Users"],
    }),
    getContacts: build.query({
      query: () => `users/`,
      providesTags: ["Contacts"],
    }),
    getUsers: build.query({
      query: () => `users/`,
      providesTags: ["Contacts"],
    }),
    getUserContacts: build.query({
      query: () => `users/:id/contacts/`,
      providesTags: ["Contacts"],
    }),
    postContact: build.mutation({
      query: (contact) => ({
        url: "contacts/",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUserContactsQuery,
  useGetContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = api;
