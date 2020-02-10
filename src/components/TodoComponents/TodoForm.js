import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  // CHANGE HANDLER
  changeHandler = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  // HANDLE SUBMIT
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: '' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTask"
          value={this.state.newTask}
          onChange={this.changeHandler}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
