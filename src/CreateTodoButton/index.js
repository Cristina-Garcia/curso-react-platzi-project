import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    //De esta forma el button afregar tarea se abre o cierra dependiendo del estado en el que se encuentre
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}
export { CreateTodoButton };
