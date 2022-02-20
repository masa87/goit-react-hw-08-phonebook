import React from "react";
import { usePostUserMutation } from "../../utils/api";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.contacts);

  const [submitData] = usePostUserMutation();

  const handleSubmit = (e) => {
    const form = e.target;
    const userName = form.userName.value;
    const password = form.password.value;
    e.preventDefault();
    form.reset();
    submitData({ userName, password });

    setTimeout(() => {
      navigate(`/`);
    }, 500);
  };

  return (
    <>
      <Navbar />
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="userName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          {" "}
          Password
          <input
            type="text"
            name="password"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
