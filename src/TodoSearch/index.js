import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
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
      disabled={loading}
    />,
  ];
}
export { TodoSearch };
