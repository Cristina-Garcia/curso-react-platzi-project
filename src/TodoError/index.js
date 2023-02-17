import React from "react";
import "./TodoError.css";
import errorPage from "../assets/image/error-page.jpg";

function TodoError({ error }) {
  return (
    <div>
      <img src={error} />
    </div>
  );
}

export { TodoError };
