// !!!!!! REDUX !!!!!!

// export const deposit = (value) => {
//   return {
//     type: "balance/deposit",
//     payload: value,
//   };
// };

// export const withdraw = (value) => {
//   return {
//     type: "balance/withdraw",
//     payload: value,
//   };
// };

// export const balanceReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     default:
//       return state;
//   }
// };

// !!!!!! REDUX TOOLKIT !!!!!!
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// export const deposit = createAction("balance/deposit");

// export const withdraw = createAction("balance/withdraw");

// export const balanceReducer = createReducer({ value: 0 }, (bulder) => {
//   bulder
//     .addCase(deposit, (state, action) => {
//       // return {
//       //   ...state,
//       //   value: state.value + action.payload,
//       // };

//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       // return {
//       //   ...state,
//       //   value: state.value - action.payload,
//       // };

//       state.value -= action.payload;
//     });
// });

// !!!!!!!!!!!!!! FRON CREATESLICE !!!!!!!

const slice = createSlice({
  name: "balance",
  initialState: { value: 0 },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export default slice.reducer;

export const { deposit, withdraw } = slice.actions;
