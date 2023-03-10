import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="IconLoading LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando...</p>
      <span className="IconLoading LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodoLoading };
