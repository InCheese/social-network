import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Message.module.css";

const Message = (props) => {
  const path = "/messages/" + props.id;
  return <div>{props.message}</div>;
};

export default Message;
