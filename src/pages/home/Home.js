import React, { useEffect } from "react";
import "./home.css";
import Side from "../../components/Side";
import Chat from "../../components/Chat";
import { actions } from "../../redux/slice";
import { useDispatch } from "react-redux";

export default function Home() {
  //
  const dispatch = useDispatch();

  useEffect(() => {
    let messages = JSON.parse(localStorage.getItem("messages"));
    dispatch(actions.setMessage({ messages }));
  }, []);
  //
  return (
    <div className="home">
      <div className="container">
        <Side />
        <Chat />
      </div>
    </div>
  );
}
