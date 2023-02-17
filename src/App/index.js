import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
// import "./App.css";

// const defaultTodos = [
//   { text: "Hacer buceo", completed: true },
//   { text: "Viajar a Japon ", completed: false },
//   { text: "Ir a la luna", completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
