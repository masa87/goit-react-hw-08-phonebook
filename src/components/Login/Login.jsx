import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../utils/api.js";

const Login = () => {
  const [userId, setUserId] = useState("");

  const { data, isError, isLoading } = useGetUsersQuery();
  console.log(data);

  // let userId;
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userNameForm = formData.get("userName");
    const passwordForm = formData.get("password");
    console.log(userNameForm);

    const checkUser = data.find(
      ({ userName, password }) =>
        userName === userNameForm && password === passwordForm
    );

    // checkUser !== undefined ? (userId = checkUser.id) : (userId = null);
    checkUser !== undefined ? setUserId(checkUser.id) : setUserId(null);
    console.log(userId);
    // console.log(checkUser.id);
    // userId = checkUser.id;
    // return userId;
  };

  //   const registeredUser = (data) => {};
  // });

  return (
    <>
      <section>
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
        {userId !== null
          ? ""
          : "incorect user name, please try again or sign in"}
      </section>
    </>
  );
};

export default Login;
