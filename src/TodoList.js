import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from "uuid/v4";
import "./TodoList.css";

class TodoList extends Component {
     constructor(props){
          super(props);
          this.state = {
               todos: [
                    {item: "hello", id: uuid()},
                    {item: "dude", id: uuid()}
               ]
          };
          this.addTodo = this.addTodo.bind(this);
          this.removeTodo = this.removeTodo.bind(this);
          this.renderTodo = this.renderTodo.bind(this);
          this.update = this.update.bind(this);
     }

     addTodo(todo) {
          this.setState(state => ({
               todos: [...state.todos, todo]
          }));
     }

     removeTodo(id) {
          const newArr = this.state.todos.filter(i => i.id !== id);
          this.setState({
               todos: newArr
          })
     }

     update(id, updatedItem) {
          const updatedList = this.state.todos.map(todo => {
               if (todo.id === id) {
                    return {...todo, item: updatedItem}
               }
               return todo
          });
          this.setState({ todos: updatedList });
     }

     renderTodo() {
          return (
               this.state.todos.map(i => ( 
                    <Todo 
                         key={i.id}
                         id={i.id}
                         value={i.item} 
                         removeTodo={this.removeTodo}
                         update={this.update}
                    />
               ))                    
          )
     }


     render() {
          return(
               <div className="TodoList">
                    <h1>Todo List</h1>
                    <NewTodoForm addTodo={this.addTodo}/>
                    {this.renderTodo()}
               </div>
          )
     }
}

export default TodoList;