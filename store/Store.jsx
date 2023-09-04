import { createStore } from "redux";

// define a reducer
const initialState = {
  message: "Welcome to Our React Redux Tutorial",
};

const reducer = (state = initialState, action) => {
  return state;
};

// create the redux store
export const store = createStore(reducer);
