import React, { Component } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import SignIn from '../../components/SignIn/SignIn';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class AdminLogin extends Component {
  state = {
    form: {
      email: {
        value: '',
        validation: {
          required: true,
          re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
        valid: false,
      },

      password: {
        value: '',
        validation: {
          required: true,
          minLength: 6,
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
      isValid = value.trim() !== '' && isValid;
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

    updatedField.valid = this.checkValidity(
      updatedField.value,
      updatedField.validation
    );

    updatedForm[e.target.id] = updatedField;

    let formIsValid = true;
    for (const field in updatedForm) {
      formIsValid = updatedForm[field].valid && formIsValid;
    }
    console.log(updatedForm[e.target.id].value);
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  };

  submitHandler = (e) => {
    if (this.state.formIsValid) {
      // this.setState({submitFailed: false})
      const clientInfo = {
        email: this.state.form.email.value,
        password: this.state.form.password.value,
      };
      this.props.submitForm(clientInfo);
    } else {
      this.setState({ submitFailed: true });
    }
    e.preventDefault();
    console.log(this.state.form.password.valid);
  };

  render() {
    return (
      <Aux>
        <NavBar />
        <SignIn
          changed={this.changedInputHandler}
          emailIsValid={!this.state.form.email.valid && this.state.submitFailed}
          passwordIsValid={
            !this.state.form.password.valid && this.state.submitFailed
          }
          submitted={this.submitHandler}
        />
        <Footer />
      </Aux>
    );
  }
}

export default AdminLogin;
