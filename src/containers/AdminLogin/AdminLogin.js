import React, { Component } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SignIn from '../../components/SignIn/SignIn';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actionTypes from '../../store/actions';

class AdminLogin extends Component {
  state = {
    form: {
      email: {
        value: '',
        validation: {
          required: true,
          re: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
        valid: false,
      },

      password: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
      },
    },
    formIsValid: false,
    submitFailed: false,
    showError: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.re) {
      isValid = rules.re.test(String(value).toLowerCase()) && isValid;
    }

    // if (rules.minLength) {
    //   isValid = value.length >= rules.minLength && isValid;
    // }

    // if (rules.maxLength) {
    //   isValid = value.length <= rules.maxLength && isValid;
    // }

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
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  };

  submitHandler = (e) => {
    if (this.state.formIsValid) {
      this.props.onAuthStart();
      const signInInfo = {
        email: this.state.form.email.value,
        password: this.state.form.password.value,
        returnSecureToken: true,
      };
      axios
        .post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBO70TJBpoHXDmsvIrWtguxaLdz726inAg',
          signInInfo
        )
        .then((res) => {
          const expirationDate = new Date(
            new Date().getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', res.data.localId);
          this.props.onAuthSuccess(res.data.idToken, res.data.localId);
          setTimeout(() => {
            this.props.onLogout();
          }, res.data.expiresIn * 1000);
        })
        .catch((err) => {
          this.setState({ showError: true });
          setTimeout(() => {
            this.setState({ showError: false });
          }, 3000);
          this.props.onAuthFail(err);
        });
    } else {
      this.setState({ submitFailed: true });
    }
    e.preventDefault();
  };

  render() {
    let redirectToPanel = null;
    if (this.props.token !== null) {
      redirectToPanel = <Redirect to='/admin-panel' />;
    }
    return (
      <Aux>
        {redirectToPanel}
        <NavBar />
        <SignIn
          changed={this.changedInputHandler}
          emailIsValid={!this.state.form.email.valid && this.state.submitFailed}
          passwordIsValid={
            !this.state.form.password.valid && this.state.submitFailed
          }
          submitted={this.submitHandler}
          loading={this.props.loading}
          error={this.props.error}
          showError={this.state.showError}
        />
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthStart: () =>
      dispatch({
        type: actionTypes.AUTH_START,
      }),
    onAuthSuccess: (token, userId) =>
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId,
      }),
    onAuthFail: (error) =>
      dispatch({
        type: actionTypes.AUTH_FAIL,
        error,
      }),
    onLogout: () =>
      dispatch({
        type: actionTypes.AUTH_LOGOUT,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
