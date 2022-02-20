import React from "react";
import { useSelector } from "react-redux";
import { usePostContactMutation } from "./../../utils/api.js";
import { Loading } from "notiflix";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Notify } from "notiflix";

const ContactForm = () => {
  Loading.remove();

  const [submitData] = usePostContactMutation();
  const { userId } = useSelector((state) => state.contacts);
  const { userName } = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    e.preventDefault();
    form.reset();

    if (name.length < 3 || phone.length < 9) {
      Notify.failure("fill correctly requested fields!");
    } else {
      submitData([userId, { name, phone }]);
      Notify.success("New contact added");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>Phonebook</h1>
      <h3>Hello {userName},</h3>
      <h4>You can add contact:</h4>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "15ch" },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}>
        <TextField
          name="name"
          id="standard-basic"
          label="name min 3 char."
          variant="standard"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          name="number"
          id="standard-basic"
          label="Number 9-digit"
          type="number"
          variant="standard"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>

      {/* <form
        onSubmit={(e) => {
          const form = e.target;
          const name = form.name.value;
          const phone = form.number.value;
          e.preventDefault();
          form.reset();
          submitData([userId, { name, phone }]);
        }}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          {" "}
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">
          <AddCircleIcon fontSize="small" />
        </button>
      </form> */}
      <h5>or filter by name/number</h5>
    </Box>
  );
};

export default ContactForm;
