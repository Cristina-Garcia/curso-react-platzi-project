import React from "react";

//Recibimos como parametros el nombre y el estado inicial de nuestro item
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  //Nuevo Hook
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        //Guardamos nuestros Item en una constante
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          //Si el usuario es nuevo, no existe un item en localStorage, por lo tanto guardamos uno con un array vacio
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          //Si existen TODOs en el localStorage los regresamos como nuestros TODOs
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
      } catch (error) {
        setError(Error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  });

  //funcion puente entre localStorage inicial y la actualizacion(complete y delete)
  const saveItem = (newItem) => {
    try {
      //convertimos a string nuestros TODOs
      const stringifiedItem = JSON.stringify(newItem);
      //Los guardamos en el localStorage
      localStorage.setItem(itemName, stringifiedItem);
      //Actualizamos nuestro estado
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  //Regresamos los datos que necesitamos
  return { item, saveItem, loading, error };
}

export { useLocalStorage };
