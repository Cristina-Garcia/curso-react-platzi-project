import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  // Creamos un stado que por defecto es un string vacio, que estamos guardando en la variable searchvalue
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  // cada vez que escribamos en el insput de busqueda va a llamar a la funcion setsearchvalue
  //para actualizar nuestro estado
  return [
    <input
      className="TodoSearch"
      placeholder="Nuevo To Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
  ];
}
export { TodoSearch };
