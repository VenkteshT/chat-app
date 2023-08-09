import React, { useState } from "react";
import "./side.css";
import Nav from "./Nav";
import Search from "./Search";
import User from "./User";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

export default function Side() {
  const [users, setUsers] = useState(user_list);

  return (
    <div className="side">
      <Nav />
      <Search />
      <div className="users">
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </div>
    </div>
  );
}
