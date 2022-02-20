import React, { useState } from "react";
import { useGetUsersQuery } from "../../utils/api.js";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm.jsx";
import { store } from "../../app/store.js";
import { setUserId } from "../../features/contacts.js";
import { useSelector } from "react-redux";

const Login = () => {
  // const [userId, setUserId] = useState("");

  // const userId =
  const { data, isError, isLoading } = useGetUsersQuery();
  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userNameForm = formData.get("userName");
    const passwordForm = formData.get("password");
    // console.log(userNameForm);

    const checkUser = data.find(
      ({ userName, password }) =>
        userName === userNameForm && password === passwordForm
    );

    // console.log(checkUser);

    checkUser !== undefined
      ? store.dispatch(setUserId(checkUser.id))
      : store.dispatch(setUserId(null));

    // userId = checkUser.id;
    // console.log(userId);
    // checkUser !== undefined ? setUserId(checkUser.id) : setUserId(null);
    // console.log(userId);
  };
  const { userId } = useSelector((state) => state.contacts);

  return (
    <>
      <section>
        <h3>Please log in or</h3>
        <Link to={`/register`}>Register</Link>
        <form onSubmit={handleSubmit}>
          <label>
            User Name:{" "}
            <input name="userName" type="text" defaultValue="Latoya Towne" />
            Password:{" "}
            <input name="password" type="text" defaultValue="password 1" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </section>
      <section>
        {userId !== null ? (
          <Link to={`/${userId}/contacts`}>{userId}</Link>
        ) : (
          "incorect user name, please try again or sign in"
        )}
      </section>
    </>
  );
};

export default Login;
