import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
     constructor(props){
          super(props);
          this.state = {
               isEditing: false,
               item: this.props.value,
               id: this.props.id
          }
          this.handleRemove = this.handleRemove.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.toggleForm = this.toggleForm.bind(this);
          this.handleUpdate = this.handleUpdate.bind(this);
          this.completeTask = this.completeTask.bind(this);
     }

     handleRemove() {
          this.props.removeTodo(this.props.id);
     }

     handleChange(evt){
          this.setState({
               [evt.target.name]: evt.target.value
          });
     }

     toggleForm() {
          this.setState({
               isEditing: !this.state.isEditing
          })
     }

     handleUpdate(evt) {
          evt.preventDefault();
          this.props.update(this.state.id, this.state.item)
          this.toggleForm();
     }

     completeTask(evt) {
          if (evt.target.style.textDecoration !== "line-through") {
               evt.target.style.textDecoration = "line-through";
          }else{
               evt.target.style.textDecoration = "none";
          }
          // evt.target.style.textDecoration = "line-through";
          
     }

     render() {

          let result;
          if (this.state.isEditing) {
               result = (
                    <div className="Todo">
                         <form onSubmit={this.handleUpdate}>
                              <input
                                   autoFocus="autofocus"
                                   type="text"
                                   value={this.state.item}
                                   name="item"
                                   onChange={this.handleChange}
                              ></input>
                              <div className="Buttons">
                                   <button>Save</button>
                              </div>
                         </form>
                    </div>
               )
          } else {
               result = (
                    <div className="Todo">
                         <div onClick={this.completeTask}>{this.props.value}</div>
                         <div className="Buttons">
                              <button onClick={this.toggleForm}>Edit</button>
                              <button onClick={this.handleRemove}>x</button>
                         </div>
                    </div>                    
               )
          }
          return result;
     }
}

export default Todo;