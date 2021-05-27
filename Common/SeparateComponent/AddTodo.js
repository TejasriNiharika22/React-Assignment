import React from 'react';
import Demo from '../../Demo/MockFile';
import Submit from '../ReusableComponents/Button';
import TodoInput from '../ReusableComponents/InputField'
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      newInputItem:''
    });
  }
  handleOnCreate(e) {
    e.preventDefault();
    Promise.resolve(this.props.addItem(this.state.newInputItem)).then(() => {
      this.setState({
        newInputItem: ''
      });
    });
  }
  handleOnChange(e) {
    this.setState({
      newInputItem: e.target.value
    })
  }

  render() {
    return (
      <div className="textField">
        <TodoInput 
          type="text"
          placeholder={this.props.Content.placeholder}
          value= {this.state.newInputItem}
          handleOnChange={(e) => { this.handleOnChange(e) }} />
        <Submit value={this.props.Content.addButton}
          onClick={(e) => { this.handleOnCreate(e) }} />

      </div>

    );
  }
}
AddTodo.defaultProps = {
  Content: Demo
};
export default AddTodo;