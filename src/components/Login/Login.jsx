import React from "react";
import { useGetUsersQuery } from "../../utils/api.js";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../../app/store.js";
import { setUserId, setUserName } from "../../features/contacts.js";
import Navbar from "../Navbar/Navbar.jsx";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const Login = () => {
  const navigate = useNavigate();
  const { data } = useGetUsersQuery();

  const handleSubmit = (e) => {
    Loading.remove();
    e.preventDefault();

    Loading.dots();
    const formData = new FormData(e.currentTarget);
    const userNameForm = formData.get("userName");
    const passwordForm = formData.get("password");

    const checkUser = data.find(
      ({ userName, password }) =>
        userName === userNameForm && password === passwordForm
    );

    checkUser !== undefined
      ? store.dispatch(setUserId(checkUser.id))
      : store.dispatch(setUserId(null));

    setTimeout(() => {
      store.dispatch(setUserName(userNameForm));
      navigate(`/${checkUser.id}/contacts`);
      // Loading.remove();
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <h1>Phonebook</h1>
      <section>
        <h3>
          Please log in or
          <Link to={`/register`}> Register</Link>
        </h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input name="userName" type="text" defaultValue="Latoya Towne" />
            Password:{" "}
            <input name="password" type="text" defaultValue="password 1" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;
