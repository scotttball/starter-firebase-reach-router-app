import { Link } from "@reach/router";
import React, { Component } from "react";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

class SignUpForm extends Component {
  onSubmit = event => {};

  onChange = event => {};

  render() {
    return <form onSubmit={this.onSubmit} />;
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account?
    <Link to="sign-up">Sign Up</Link>
  </p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink };
