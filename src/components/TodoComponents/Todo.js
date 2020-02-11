import React from 'react';
import './Todo.css';

const Todo = props => {
  console.log('Todo', props);

  return(
    <>
      <li
        onClick={() => props.toggle(props.todo.id)}
        className={`todo-item${props.todo.completed ? ' checked' : ''}`}>
        {props.todo.task}
      </li>
    </>
  );
}

export default Todo;
