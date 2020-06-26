import React, { Component } from 'react';

import classes from './UserInfoForm.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import FormGroupAnimated from '../../UI/FormGroupAnimated/FormGroupAnimated';
import Button from '../../UI/Button/Button';
import * as actionTypes from '../../../store/actions';
import { connect } from 'react-redux';

class UserInfoForm extends Component {
  // state = {

  // };

  // changedInputHandler = (e) => {
  //   const updatedForm = { ...this.state.form };
  //   const updatedField = { ...updatedForm[e.target.id] };
  //   updatedField.value = e.target.value;
  //   updatedField.valid = this.checkValidity(
  //     updatedField.value,
  //     updatedField.validation
  //   );
  //   updatedForm[e.target.id] = updatedField;

  //   let formIsValid = true;
  //   for (const field in updatedForm) {
  //     formIsValid = updatedForm[field].valid && formIsValid;
  //   }

  //   this.setState({ form: updatedForm, formIsValid: formIsValid });
  // };

  // submitHandler = (e) => {
  //   if (this.state.formIsValid) {
  //     // this.setState({submitFailed: false})
  //     const clientInfo = {
  //       name: this.state.form.name.value,
  //       email: this.state.form.email.value,
  //       number: this.state.form.number.value,
  //     };
  //     this.props.submitForm(clientInfo);
  //   } else {
  //     this.setState({ submitFailed: true });
  //   }
  //   e.preventDefault();
  // };

  render() {
    return (
      <Aux>
        <section className={classes.UserInfoForm}>
          <div className='container'>
            <h1 className='l-heading-2'>
              {' '}
              <span className='primary-text-dark'>Book</span> a Session
            </h1>
            <p>Please fill out the form below to book a session with us.</p>

            <form onSubmit={this.props.onFormSubmit} action=''>
              <FormGroupAnimated
                type='text'
                name='name'
                id='name'
                for='name'
                text='Name'
                value={this.props.form.name.value}
                changed={this.props.onInputChange}
                invalid={!this.props.form.name.valid && this.props.submitFailed}
              />
              <FormGroupAnimated
                type='email'
                name='email'
                id='email'
                for='email'
                text='Email'
                value={this.props.form.email.value}
                changed={this.props.onInputChange}
                invalid={
                  !this.props.form.email.valid && this.props.submitFailed
                }
              />
              <FormGroupAnimated
                type='tel'
                name='number'
                id='number'
                for='number'
                text='Phone Number'
                value={this.props.form.number.value}
                changed={this.props.onInputChange}
                invalid={
                  !this.props.form.number.valid && this.props.submitFailed
                }
              />
              <FormGroupAnimated
                type='number'
                name='numberOfPeople'
                id='numberOfPeople'
                for='numberOfPeople'
                text='Number of People'
                min={this.props.form.numberOfPeople.validation.min}
                max={this.props.form.numberOfPeople.validation.max}
                value={this.props.form.numberOfPeople.value}
                changed={this.props.onInputChange}
                invalid={
                  !this.props.form.numberOfPeople.valid &&
                  this.props.submitFailed
                }
              />

              <Button
                // disabled={!this.state.formIsValid}
                type='submit'
                className='btn'
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

const mapStateToProps = (state) => {
  return {
    form: state.reserve.form,
    formIsValid: state.reserve.formIsValid,
    submitFailed: state.reserve.submitFailed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) =>
      dispatch({
        type: actionTypes.INPUT_CHANGE,
        fieldName: e.target.id,
        value: e.target.value,
      }),
    onFormSubmit: (e) =>
      dispatch({
        type: actionTypes.SUBMIT_FORM,
        event: e,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);
