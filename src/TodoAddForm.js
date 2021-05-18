import React from 'react';
class TodoAddForm extends React.Component {
        constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }
      componentDidMount() {
        this.refs.itemName.focus();
      }
      onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        
        if(newItemValue) {
          this.props.addItem({newItemValue});
          this.refs.form.reset();
        }
      }
      render () {
        return (
          <form ref="form" onSubmit={this.onSubmit} className="form-inline">
            <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
            <button type="submit" className="btn btn-default">Add</button> 
          </form>
        );   
      }
    // constructor(props) {
    // super(props);
    // this.state = { username: '' };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleChange.bind(this);
    //  } 
    // handleChange(event){
    //     this.setState({value: event.target.value});
    // }
    // handleSubmit(event) {
    //     this.setState({value: event.target.value});
    //     event.preventDefault();
    // }
    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //         <input type="text" value={this.state.value} onChange={this.handleChange} />
    //         <input type="submit" value="Submit" />
    //         </form>
    //     );
    // }
}
export default TodoAddForm