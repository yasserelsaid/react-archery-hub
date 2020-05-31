import React, { Component } from "react";

import classes from "./UserInfoForm.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

import FormGroupAnimated from "../../UI/FormGroupAnimated/FormGroupAnimated";
import Button from "../../UI/Button/Button";

class userInfoForm extends Component {
  state = {
    form: {
      name: {
        value: "",
        validation: {
          required: true,
          // /^[a-z][a-z\s]*$/
          re: /^[a-zA-Z\s]{2,40}$/,
        },
        valid: false,
      },
      email: {
        value: "",
        validation: {
          required: true,
          re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
        valid: false,
      },
      number: {
        value: "",
        validation: {
          required: true,
          // This is a re for Egyptian phone numbers
          // re: /^01[0-2]{1}[0-9]{8}/,
          // This is a re for Egyptian and international Phone Numbers
          re: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
          minLength: 10,
          maxLength: 14,
        },
        valid: false,
      },
    },
    formIsValid: false,
    submitFailed: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.re) {
      isValid = rules.re.test(String(value).toLowerCase()) && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  changedInputHandler = (e) => {
    const updatedForm = { ...this.state.form };
    const updatedField = { ...updatedForm[e.target.id] };
    updatedField.value = e.target.value;
    updatedField.touched = true;
    updatedField.valid = this.checkValidity(
      updatedField.value,
      updatedField.validation
    );
    updatedForm[e.target.id] = updatedField;

    let formIsValid = true;
    for (const field in updatedForm) {
      formIsValid = updatedForm[field].valid && formIsValid;
    }

    this.setState({ form: updatedForm, formIsValid: formIsValid });
  };

  submitHandler = (e) => {
    console.log("function called");
    if (this.state.formIsValid) {
      // this.setState({submitFailed: false})
      const clientInfo = {
        name: this.state.form.name.value,
        email: this.state.form.email.value,
        number: this.state.form.number.value,
      };
      this.props.submitForm(clientInfo);
    } else {
      console.log("form is invalid");
      this.setState({ submitFailed: true });
      console.log("submit failed", this.state.form.name.valid);
      console.log("submit failed", this.state.form.email.valid);
      console.log("submit failed", this.state.form.number.valid);
    }
    e.preventDefault();
  };

  render() {
    return (
      <Aux>
        <section className={classes.UserInfoForm}>
          <div className="container">
            <h1 className="l-heading-2">
              {" "}
              <span className="primary-text-dark">Book</span> a Session
            </h1>
            <p>Please fill out the form below to book a session with us.</p>

            <form onSubmit={this.submitHandler} action="">
              <FormGroupAnimated
                type="text"
                name="name"
                id="name"
                for="name"
                text="Name"
                value={this.state.form.name.value}
                changed={this.changedInputHandler}
                invalid={!this.state.form.name.valid && this.state.submitFailed}
              />
              <FormGroupAnimated
                type="email"
                name="email"
                id="email"
                for="email"
                text="Email"
                value={this.state.form.email.value}
                changed={this.changedInputHandler}
                invalid={
                  !this.state.form.email.valid && this.state.submitFailed
                }
              />
              <FormGroupAnimated
                type="tel"
                name="number"
                id="number"
                for="number"
                text="Phone Number"
                value={this.state.form.number.value}
                changed={this.changedInputHandler}
                invalid={
                  !this.state.form.number.valid && this.state.submitFailed
                }
              />

              <Button
                // disabled={!this.state.formIsValid}
                type="submit"
                className="btn"
              >
                Continue
              </Button>
            </form>
          </div>
        </section>
      </Aux>
    );
  }
}

export default userInfoForm;
