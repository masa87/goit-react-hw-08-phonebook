// import { useSelector } from "react-redux";
// import express from "express";

const express = require("express");
const app = express();
// const port = 3100;
const port = process.env.PORT || 3100;
const bodyParser = require("body-parser");
const cors = require("cors");
const react = require("react-redux");
// const { useSelector } = react();

// CORS
app.use(cors());
// for parsing Content-Type: application/json
app.use(bodyParser.json());

let data = {
  users: [
    {
      id: 1,
      name: "Fake User",
      loggedIn: false,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: "Next Fake User",
      loggedIn: false,
      createdAt: new Date(),
    },
  ],
  contacts: [
    { id: 1, userId: 1, name: "contact name" },
    { id: 2, userId: 1, name: "contact name 2" },
    { id: 3, userId: 2, name: "dr who" },
  ],
};

app.get("/", (req, res) => {
  // let storeContacts = react.useSelector((state) => state.contacts.contacts);
  // console.log(storeContacts);
  res.send(`Hello World! ${port}`);
});

// One User by Id
// app.get("/users/:id/contacts", (req, res) => {
//   const userIdReq = Number(req.params.id);
//   const contacts = data.contacts.filter(({ userId }) => userId === userIdReq);
//   res.json(contacts);
// });

// All Contacts
// app.get("/", (req, res) => {
//   // const contacts = data.contacts;
//   console.log(storeContacts);
//   res.json(storeContacts);
// });

// All Contacts
app.get("/contacts", (req, res) => {
  const storeContacts = react.useSelector((state) => console.log(state));
  const contacts = data.contacts;
  res.json(storeContacts);
});

// All Users
// app.get("/api/v1/users", (req, res) => {
//   const users = data.users;
//   res.json(users);
// });

// One User by Id
// app.get("/api/v1/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = data.users.find(({ id }) => id === userId);
//   res.json(user);
// });

// Register
// app.post("/api/v1/users", (req, res) => {
//   const newUser = {
//     id: data.users.length + 1,
//     name: req.body.name,
//     loggedIn: false,
//     createdAt: new Date(),
//   };
//   const newUsers = [...data.users, newUser];
//   data.users = newUsers;
//   console.log(newUsers);
//   res.json({ code: 201 });
// });

// Login
// app.post("/api/v1/users/login", (req, res) => {
//   const userName = req.body.name;
//   const newUsers = data.users.map((user) =>
//     user.name === userName ? { ...user, loggedIn: true } : user
//   );
//   data.users = newUsers;
//   const user = newUsers.find(({ name }) => name === userName);

//   res.json({ code: 200, userId: user.id });
// });

// Logout
// app.post("/api/v1/users/logout", (req, res) => {
//   const userName = req.body.name;
//   const newUsers = data.users.map((user) =>
//     user.name === userName ? { ...user, loggedIn: false } : user
//   );
//   data.users = newUsers;

//   res.json({ code: 200 });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
