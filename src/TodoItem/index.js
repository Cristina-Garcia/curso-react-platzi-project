import React from "react";
import "./TodoItem.css";
import { BsCheck2Circle, BsTrash } from "react-icons/bs";

function TodoItem(props) {
  const onComplete = () => {
    alert("Ya completaste el TODO" + props.text);
  };
  const onDelete = () => {
    alert("Borraste el todo" + props.text);
  };
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <BsCheck2Circle />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <BsTrash />
      </span>
    </li>
  );
}
export { TodoItem };
