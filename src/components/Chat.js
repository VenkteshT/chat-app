import React, { useEffect } from "react";
import "./chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserPlus,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Message from "./Message";
import { stateSelector } from "../redux/slice";
import { useSelector } from "react-redux";
export default function Chat() {
  //
  const { messages } = useSelector(stateSelector);

  //
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jan</span>
        <div className="chatIcons">
          <FontAwesomeIcon icon={faVideoCamera} />
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
      </div>

      <div className="messages">
        {messages.map((item) => (
          <Message
            key={item.id}
            id={item.id}
            message={item.content}
            from={item.from}
            like={item.like}
          />
        ))}
      </div>
      <Input />
    </div>
  );
}
