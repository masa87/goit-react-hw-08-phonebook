import React from "react";
import { usePostUserMutation } from "../../utils/api";

const Register = () => {
  const [submitData] = usePostUserMutation();

  return (
    <form
      onSubmit={(e) => {
        const form = e.target;
        const userName = form.userName.value;
        const password = form.password.value;
        e.preventDefault();
        form.reset();
        submitData({ userName, password });
      }}>
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
  );
};

export default Register;
