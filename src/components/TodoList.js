import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: []
  };

  addTodo = (todo) => {
      //apending new todo 
      const newTodos = [todo,...this.state.todos]
      this.setState({
          todos: newTodos
      })
  }

  printList = () =>{
      console.log(this.state.todos)
  }

  handleDeleteTodo = (id) => {
      this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
      });
  }

  render() {
    return (
      <div>
        <TodoForm onSubmit = {this.addTodo}></TodoForm>
        {this.state.todos.map(todo => (
            <Todo 
            key = {todo.id} 
            text = {todo.text} 
            onDelete = {() => this.handleDeleteTodo(todo.id)}>

            </Todo>
        ))}
        <button onClick = {this.printList}> Submit</button>
      </div>
    );
  }
}
