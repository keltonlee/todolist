import React from 'react';
import './done.css';
class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.TodoDone(index);
    }
    render () {
      var todoClass = this.props.item.done ? 
          "done" : "undone";
      return(
        <li className="list-group-item ">
          <div className={todoClass}>
            <button type="button" onClick={this.onClickDone}>&radic;</button>     
            {this.props.item.value}
            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </li>     
      );
    }
  }
  export default TodoListItem