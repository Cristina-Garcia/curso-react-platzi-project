import React from "react";

import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { ChangeAlert } from "../ChangeAlert";

// const defaultTodos = [
//   { text: "Hacer buceo", completed: true },
//   { text: "Viajar a Japon ", completed: false },
//   { text: "Ir a la luna", completed: false },
// ];

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onNoSearchResult={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        //render props
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* render function */}

        {/* {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
      </TodoList>

      {/* <TodoList>
        {error && <TodoError />}
        {loading && new Array(5).fill(1).map((a, i) => <TodoLoading key={i} />)}
        {!loading && !searchedTodos.length && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          // enviar una identidad especial para evitar render inecesarios: key
        ))}
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
