import React from "react";
//styles
import "./sign-up.styles.scss";
// components
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

// firebase related imports
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, displayName, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    // doesn't work firebase error
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // create a user with the information returned from the promise object above
      await createUserProfileDocument(user, { displayName });
      // reset the state
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, displayName, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="name"
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            id="email-signup"
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            id="password-signup"
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
