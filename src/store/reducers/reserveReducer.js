import * as actionTypes from '../actions';

const checkValidity = (value, rules) => {
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
  if (rules.min) {
    isValid = value >= rules.min && isValid;
  }
  if (rules.max) {
    isValid = value <= rules.max && isValid;
  }
  return isValid;
};

const initialState = {
  output: 'infoForm',
  selectedTimeslot: null,
  location: null,
  form: {
    name: {
      value: '',
      validation: {
        required: true,
        // /^[a-z][a-z\s]*$/
        re: /^[a-zA-Z\s]{2,40}$/,
      },
      valid: false,
    },
    email: {
      value: '',
      validation: {
        required: true,
        re: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      },
      valid: false,
    },
    number: {
      value: '',
      validation: {
        required: true,
        // This is a re for Egyptian phone numbers
        // re: /^01[0-2]{1}[0-9]{8}/,
        // This is a re for Egyptian and international Phone Numbers
        re: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
        minLength: 10,
        maxLength: 14,
      },
      valid: false,
    },
    numberOfPeople: {
      value: '',
      validation: {
        required: true,
        min: 1,
        max: 30,
      },
      valid: false,
    },
  },
  formIsValid: false,
  submitFailed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_STATE:
      return {
        ...initialState,
      };
    case actionTypes.INPUT_CHANGE:
      const updatedForm = { ...state.form };
      const updatedField = { ...updatedForm[action.fieldName] };
      updatedField.value = action.value;
      updatedField.valid = checkValidity(
        updatedField.value,
        updatedField.validation
      );
      updatedForm[action.fieldName] = updatedField;
      let formIsValid = true;
      for (const field in updatedForm) {
        formIsValid = updatedForm[field].valid && formIsValid;
      }
      return {
        ...state,
        form: updatedForm,
        formIsValid: formIsValid,
      };
    case actionTypes.SUBMIT_FORM:
      action.event.preventDefault();
      if (state.formIsValid) {
        return {
          ...state,
          selectedTimeslot: null,
          location: null,
          output: 'chooseLocation',
        };
      } else {
        return {
          ...state,
          submitFailed: true,
        };
      }
    case actionTypes.CHANGE_LOCATION:
      return {
        ...state,
        selectedTimeslot: null,
        location: null,
        output: 'chooseLocation',
      };

    case actionTypes.SUBMIT_LOCATION:
      return {
        ...state,
        selectedTimeslot: null,
        location: action.location,
        output: 'chooseDate',
      };
    case actionTypes.SELECT_TIMESLOT:
      return {
        ...state,
        selectedTimeslot: action.timeslot,
      };
    case actionTypes.SHOW_CONFIRMATION_PROMPT:
      return {
        ...state,
        output: 'confirmReservationPrompt',
      };
    case actionTypes.SHOW_SPINNER:
      return {
        ...state,
        output: 'loading',
      };
    case actionTypes.SHOW_CONFIRMATION:
      return {
        ...state,
        output: 'reservationConfirmationMessage',
      };
    case actionTypes.SHOW_ERROR:
      return {
        ...state,
        output: 'reservationError',
      };

    default:
      return state;
  }
};

export default reducer;
