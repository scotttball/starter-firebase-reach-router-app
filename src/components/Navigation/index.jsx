import React from "react";
import { Link } from "@reach/router";

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sign-in">Sign In</Link>
      </li>
      <li>
        <Link to="/landing">Landing</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
