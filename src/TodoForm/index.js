import React from "react";

import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  //Nuevo estado local para el nuevo ToDo, por efecto vacio.
  const [newTodoValue, setNewTodoValue] = React.useState("");

  //Se captura el valor (texto) que el usuario introduce
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  //Si el usuario agrega un nuevo Todo se agrega y despues se cierra el Modal
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue == "") {
      alert("Quiere agregar un ToDo vacio?");
      // !addTodo(newTodoValue);
    } else {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  return (
    <form className="TodoForm-Container" onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ir a la Luna"
      />
      <div className="TodoForm-buttons">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
