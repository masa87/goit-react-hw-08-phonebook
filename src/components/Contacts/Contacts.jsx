import React from "react";
import { useSelector } from "react-redux";
import {
  useGetUserContactsQuery,
  useDeleteContactMutation,
} from "../../utils/api.js";
import { Loading } from "notiflix";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const showContacts = (data, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return data.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(normalizedFilter)
  );
};

export const Contacts = () => {
  const { userId } = useSelector((state) => state.contacts);

  const { data, isError, isLoading } = useGetUserContactsQuery(userId);
  const [deleteContact] = useDeleteContactMutation();

  const deleteUserContact = (id) => {
    Loading.dots();
    deleteContact([userId, id]);
    setTimeout(() => {
      Loading.remove();
      Notify.success("Done");
    }, 1000);
  };
  const filter = useSelector((state) => state.contacts.filter);

  return (
    <>
      {isError ? (
        <>Error...</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {showContacts(data, filter).map(({ id, name, phone, userId }) => (
            <li key={id}>
              {name}: {phone}
              <button
                type="button"
                id={id}
                onClick={() => {
                  deleteUserContact(id);
                  console.log(`z listy ${userId}, ${id}`);
                }}>
                Delete
              </button>
            </li>
          ))}
        </>
      ) : null}
    </>
  );
};
