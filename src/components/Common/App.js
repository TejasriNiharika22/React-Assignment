import React from 'react';
import styles from '../../root/styles/App.css';
import AddTodo from '../../components/Common/AddTodo'
import TodoList from '../../components/Common/TodoList'
import data from '../../mock/MockData'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  addItem(item) {
    this.state.data.unshift({
      task: item
    });
    this.setState({
      data: this.state.data
    });
  }
  findItem(item) {
    // return this.state.data.filter((element) => element.task === item)[0]; 
    return this.state.data.find((element) => element.task === item) 
  }
  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.task = newItem;
    this.setState({ data: this.state.data });
  }
  deleteItem(item) {
    let index = this.state.data.map(element => element.task).indexOf(item);
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
  }
  render() {
    return (
      <div className= {styles.App}>
        <div className="header">
          <h1>{this.props.Content.text}</h1>
          <br />
        </div>
        <AddTodo data={this.state.data} addItem={this.addItem.bind(this)} />
        <br />
        <br />
        <h2>{this.props.Content.sub}</h2>
    
        <TodoList data={this.state.data} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)}
        />
      </div>
    );
  }
}
App.defaultProps = {
  Content: data
};
export default App;