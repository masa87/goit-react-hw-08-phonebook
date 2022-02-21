import React from "react";
import { store } from "../../app/store";
import { setFilter } from "../../features/contacts";
import TextField from "@mui/material/TextField";

export const Filter = () => {
  const onFilter = (e) => {
    store.dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      {/* <p>Search by name/number:</p> */}
      <TextField
        onChange={onFilter}
        id="outlined-search"
        label="Search by name/number"
        type="text"
        sx={{
          // marginBottom: "40px",
          // marginTop: "30px",
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
      />

      {/* <label>
        Filter:
        <input
          onChange={onFilter}
          type="text"
          placeholder="Filter Contacts"></input>
      </label> */}
    </div>
  );
};
