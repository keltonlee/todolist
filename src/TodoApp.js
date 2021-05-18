import React from 'react';
import ReactDOM from 'react-dom';
import TodoTitle from './TodoTitle.js';
import TodoAddForm from './TodoAddForm.js';
import TodoList from './TodoList.js';
import './done.css';

var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});
class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = { todoItems: todoItems };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.TodoDone = this.TodoDone.bind(this);
    } 
    addItem(todoItem) {
        todoItems.unshift({
            index: todoItems.length+1, 
            value: todoItem.newItemValue, 
            done: false
        });
        this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
        todoItems.splice(itemIndex, 1);
        this.setState({todoItems: todoItems});
    }
    TodoDone(itemIndex) {
        var todo = todoItems[itemIndex];
        todoItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({todoItems: todoItems});
    }
    render() {
        return (
            <div id="main"> 
                <TodoTitle />
                <TodoList items={this.props.initItems} removeItem={this.removeItem} TodoDone={this.TodoDone}/>
                <TodoAddForm addItem={this.addItem} />
            </div>
        );
    }
}
export default TodoApp
ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('root'));
