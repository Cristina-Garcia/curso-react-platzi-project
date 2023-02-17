import React from "react";
import "./TodoLoading.css";
function TodoLoading({ error }) {
  return (
    <div className="LoadingTodo-container">
      <span className="IconLoading LoadingTodo-completeIcon">✓</span>
      <p className="LoadingTodo-text">Cargando...</p>
      <span className="IconLoading LoadingTodo-deleteIcon">X</span>
    </div>
  );
}

export { TodoLoading };
