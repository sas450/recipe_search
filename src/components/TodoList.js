import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Axios from "axios";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    name: ""
  };

  addTodo = todo => {
    //apending new todo
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  printList = () => {
    console.log(this.state.todos);
  };

  onSearch = (event) =>{
    event.preventDefault();
    Axios.post('127.0.0.1:5000', this.state.todos).then(res => {
      console.log(res);
      console.log(res.data);
    })
  }



  render() {
    return (
      <div>
        <div>
          <TodoForm onSubmit={this.addTodo}></TodoForm>
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              text={todo.text}
              onDelete={() => this.handleDeleteTodo(todo.id)}
            ></Todo>
          ))}
        </div>
        <button onClick={this.onSearch}> Submit</button>
      </div>
    );
  }
}
