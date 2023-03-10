import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunction = props.children || props.render;
  return (
    <section className="TodoList-Container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onNoSearchResult(props.searchText)}

      {!props.loading && props.searchedTodos.map(renderFunction)}

      {/* render props y render function (props.children)*/}
      <ul>{props.children}</ul>
    </section>
  );
}
export { TodoList };
