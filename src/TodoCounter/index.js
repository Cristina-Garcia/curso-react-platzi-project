import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  //Deamos de usar use Context porque ahora pasamos como parametros.
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}
export { TodoCounter };
