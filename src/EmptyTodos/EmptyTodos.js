import React from "react";
import "./EmptyTodos.css";
import agregar from "../assets/image/add.webp";

function EmptyTodos() {
  return (
    <div className="EmptyTodos-container">
      <p>Aun no hay ninguna tarea, Comencemos agregando una. </p>
      <img src={agregar} />;
    </div>
  );
}

export { EmptyTodos };
