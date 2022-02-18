import React from "react";
import { useSelector } from "react-redux";
import {
  // useGetUserByIdQuery,
  // useGetUserContactsQuery,
  useGetContactsQuery,
  useGetUsersQuery,
  useDeleteContactMutation,
} from "../../utils/api.js";

// const showContacts = (data, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();
//   console.log(data);

//   return data.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter) ||
//       contact.phone.includes(normalizedFilter)
//   );
// };

export const Contacts = () => {
  const { data, isError, isLoading } = useGetContactsQuery();
  // const { data, isError, isLoading } = useGetUsersQuery();
  // console.log(data);
  // const [deleteContact] = useDeleteContactMutation();
  // const filter = useSelector((state) => state.contacts.filter);
  return (
    <div></div>
    //   <>
    //     {isError ? (
    //       <>Error...</>
    //     ) : isLoading ? (
    //       <>Loading...</>
    //     ) : data ? (
    //       <>
    //         {showContacts(data, filter).map(({ id, name, phone }) => (
    //           <li key={id}>
    //             {name}: {phone}
    //             <button
    //               type="button"
    //               id={id}
    //               onClick={() => {
    //                 deleteContact(id);
    //               }}>
    //               Delete
    //             </button>
    //           </li>
    //         ))}
    //       </>
    //     ) : null}
    // </>
  );
};
