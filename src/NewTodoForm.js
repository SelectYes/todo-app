import React, { Component } from 'react';
import uuid from "uuid/v4";
import "./TodoForm.css";

class NewTodoForm extends Component {
     constructor(props) {
          super(props);
          this.state = {
               item: "",
               id: uuid()
          };
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
     }

     handleSubmit(evt) {
          evt.preventDefault();
          this.props.addTodo(this.state);
          this.setState({item: "", id: uuid()});
     }

     handleChange(evt) {
          this.setState({
               [evt.target.name]: evt.target.value
          })
     }

     render() {
          return(
               <form className="TodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="newTodo">New Todo: </label>
                    <input 
                         id="newTodo"
                         name="item"
                         value={this.state.item}
                         onChange={this.handleChange}
                         ></input>
                    <button>Add To List</button>
               </form>
          )
     }
}

export default NewTodoForm;