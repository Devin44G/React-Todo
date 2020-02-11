import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 const TodoList = props => {
   console.log('List', props);

   return(
     <div>
       <h2>Todo List</h2>
       <ul>
         {props.todos.map(todo => {
           return(
             <Todo key={todo.id} todo={todo} toggle={props.toggle}/>
           );
         })}
       </ul>
       <button onClick={props.clearTodos}>Clear List</button>
     </div>
   );
 }

 export default TodoList;
