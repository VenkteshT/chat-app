import React from "react";
import "./message.css";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { actions } from "../redux/slice";
export default function Message({ message, from, id, like }) {
  //
  const dispatch = useDispatch();

  // like message
  function handleClick() {
    dispatch(actions.likeMessage({ id }));
  }

  // delete message
  function handleMessageDelete(id) {
    dispatch(actions.deleteMessage({ id }));
  }
  //
  return (
    <div className="chat-message">
      <I icon={faTrash} onClick={() => handleMessageDelete(id)} />
      <p className="content">{message}</p>
      <div className="likes">
        <I icon={faHeart} onClick={handleClick} />
        <span className="count">{like}</span>
      </div>
      <span className="from">{from}</span>
    </div>
  );
}
