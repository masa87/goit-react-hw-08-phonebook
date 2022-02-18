import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import Login from "./components/Login/Login";
// imporg Login
// import { store } from "./app/store";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      {/* <h2>Contacts</h2> */}
      <Filter />
      <ContactList />
      <Login />
    </div>
  );
};

export default App;
