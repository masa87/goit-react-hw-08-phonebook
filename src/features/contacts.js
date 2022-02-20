import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const defaultState = {
  contacts: [],
  filter: "",
  userId: null,
};

const slice = createSlice({
  name: "contacts",
  initialState: defaultState,
  reducers: {
    addContact: (state, { payload }) => {
      const id = nanoid();
      state.contacts.push({
        id,
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setContacts: (state, { payload }) => {
      state.contacts = payload;
    },
    setUserId: (state, { payload }) => {
      state.userId = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, setContacts, setUserId } =
  slice.actions;

export default slice.reducer;
