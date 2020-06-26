// import * as actionTypes from '../actions';

// const initialState = {
//   monday: {
//     checked: false,
//     timeslots: [
//       [1, 2],
//       [3, 4],
//     ],
//   },
//   tuesday: {
//     checked: false,
//     timeslots: [],
//   },
//   wednesday: {
//     checked: false,
//     timeslots: [],
//   },
//   thursday: {
//     checked: false,
//     timeslots: [],
//   },
//   friday: {
//     checked: false,
//     timeslots: [],
//   },
//   saturday: {
//     checked: false,
//     timeslots: [],
//   },
//   sunday: {
//     checked: false,
//     timeslots: [],
//   },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.CHANGE_TIME:
//       return {
//         ...state,
//         [action.day]: {
//           ...state[action.day],
//           timeslots: [...state[action.day].timeslots, action.newTimeslot],
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
