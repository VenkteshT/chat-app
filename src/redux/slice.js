import { createSlice } from "@reduxjs/toolkit";

//
const initialState = {
  messages: [],
};

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // set messages stored in localstorage when page reloads
    setMessage(state, action) {
      const { messages } = action.payload;
      state.messages = [...messages];
    },

    // add new message
    addMessage(state, action) {
      const { from, chatMessage } = action.payload;
      let message = {
        id: Date.now(),
        content: chatMessage,
        like: 0,
        from,
      };

      state.messages = [...state.messages, message];
      localStorage.setItem("messages", JSON.stringify(state.messages));
    },

    // like message
    likeMessage(state, action) {
      const { id } = action.payload;
      let message = state.messages.find((item) => item.id === id);
      message.like++;
      localStorage.setItem("messages", JSON.stringify(state.messages));
    },

    // deleteMessage
    deleteMessage(state, action) {
      const { id } = action.payload;
      state.messages = state.messages.filter((item) => item.id !== id);
      localStorage.setItem("messages", JSON.stringify(state.messages));
    },
  },
});

// acions
export const actions = slice.actions;

// reducer
export const reducer = slice.reducer;

// selector
export const stateSelector = (state) => state.chatReducer;
