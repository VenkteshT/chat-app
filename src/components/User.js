import React from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const user_png =
  "https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png";

export default function User({ user }) {
  return (
    <div className="userChat">
      <FontAwesomeIcon icon={faUser} className="icon" />
      <div className="userChatInfo">
        <p className="username">{user}</p>
        <span className="userLastChat">Hi</span>
      </div>
    </div>
  );
}
