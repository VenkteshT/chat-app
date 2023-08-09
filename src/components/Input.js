import React, { useState } from "react";
import "./input.css";
import { toast } from "react-toastify";
import { actions } from "../redux/slice";
import { useDispatch } from "react-redux";

// user list
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const emoji_list = ["🤨", "🫡", "😶", "🤩", "🙂", "😎", "😉", "😅", "😥", "😴"];
//
export default function Input() {
  //
  const [showUserList, setShowUserList] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  //
  const dispatch = useDispatch();

  // message
  const [data, setData] = useState("");

  // input handler
  function handleInputChange(e) {
    const { value } = e.target;
    setData(value);
    setShowUserList(value.split(" ").includes("@"));
  }

  // submit handler
  function handleSubmit(e) {
    e.preventDefault();
    if (!data) {
      toast.error("cannot send empty message !", { autoClose: 2000 });
      return;
    } else {
      let random = Math.trunc(Math.random() * user_list.length);
      dispatch(
        actions.addMessage({ chatMessage: data, from: user_list[random] })
      );
      setData("");
    }
  }

  //
  function handleUserClick(user) {
    setData(data + `${user}`);
    setShowUserList(false);
  }

  //
  function handleEmojiClick(emoji) {
    setData(data + `${emoji}`);
    setShowEmoji(false);
  }
  //
  return (
    <form onSubmit={handleSubmit} className="input-container">
      {showUserList && (
        <div className="user-list">
          {user_list.map((user, i) => (
            <p key={i} onClick={() => handleUserClick(user)}>
              {`@` + user}
            </p>
          ))}
        </div>
      )}
      <input
        onChange={handleInputChange}
        type="text"
        name=""
        id=""
        placeholder="type message..."
        value={data}
      />
      {showEmoji && (
        <div className="emoji-list">
          {emoji_list.map((el, i) => (
            <p
              key={i}
              style={{ margin: "0px", padding: "0px" }}
              onClick={() => handleEmojiClick(el)}
            >
              {el}
            </p>
          ))}
        </div>
      )}
      <span className="emojis" onClick={() => setShowEmoji((p) => !p)}>
        🙂
      </span>
      <button type="submit" className="send">
        Send
      </button>
    </form>
  );
}
