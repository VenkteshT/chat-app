import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const user =
  "https://www.themoviedb.org/t/p/w500/qexV6nViZCqJCl0jiquD2ZCtljh.jpg";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="title">My Chat</div>
      <div className="user">
        <img src={user} alt="profile" height={40} width={40} />
        <span>Jan</span>
        <Link to={"/signin"}>
          <FontAwesomeIcon icon={faSignOut} />
        </Link>
      </div>
    </div>
  );
}
