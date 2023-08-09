import { configureStore } from "@reduxjs/toolkit";
import { reducer as chatReducer } from "./slice";
import { alertReducer } from "./alert";
const store = configureStore({
  reducer: {
    chatReducer,
    alertReducer,
  },
});

export default store;
