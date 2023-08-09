import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./slice";
import { toast } from "react-toastify";

//
const alertSlice = createSlice({
  //
  name: "alert",
  initialState: {},
  extraReducers: (builder) => {
    // add message
    builder.addCase(actions.addMessage, () => {
      toast.success("Message sent ✅", { autoClose: 1200 });
    });

    // delte message
    builder.addCase(actions.deleteMessage, () => {
      toast.success("message delted", { autoClose: 1100 });
    });

    //
  },
});

// reducer
export const alertReducer = alertSlice.reducer;
