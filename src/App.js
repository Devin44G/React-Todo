import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// Dummy Data
const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  // MAKE TOGGLE METHOD
  toggle = clicked => {
    const newTodoList = this.state.todos.map(todo => {

      if(todo.id === clicked) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newTodoList
    });
  };

  // ADD NEW TASK METHOD
  addNewTask = input => {
    const newTask = {
      task: input,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  // CLEAR TASKS METHOD
  clearTodos = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(
        todo => !todo.completed
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addNewTask={this.addNewTask}/>
        <TodoList
          todos={this.state.todos}
          toggle={this.toggle}
          clearTodos={this.clearTodos}
        />
      </div>
    );
  }
}

export default App;
