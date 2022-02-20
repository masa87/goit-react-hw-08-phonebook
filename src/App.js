import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContactForm from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      {/* <h1>Phonebook</h1> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <h3>Please log in</h3> */}
              {/* <Navbar /> */}
              <Login />
            </>
          }></Route>
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }></Route>
        <Route
          path="/:id/contacts"
          element={
            <>
              <ContactForm />
              <Filter />
              <ContactList />
            </>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
