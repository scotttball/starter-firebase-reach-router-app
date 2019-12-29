import React from "react";
import { Router } from "@reach/router";

// components
import Navigation from "../Navigation";
import Home from "../Home";
import Landing from "../Landing";
import SignIn from "../SignIn";
import Account from "../Account";
import Admin from "../Admin";

const App = () => (
  <div>
    <nav>
      <Navigation />
    </nav>
    <Router>
      <Home path="/" />
      <Landing path="landing" />
      <SignIn path="sign-in" />
      <Account path="account" />
      <Admin path="admin" />
    </Router>
  </div>
);

export default App;
