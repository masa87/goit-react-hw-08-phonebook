import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={`/`}>Log in</Link>
      <Link to={`/register`}>Register</Link>
      {/* <Link to={`/`} >Log in</Link> */}
    </>
  );
};

export default Navbar;
