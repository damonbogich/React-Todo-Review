import React from 'react';
import './components/TodoList';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        }
      ], 
      taskName: ""
    }
  }
  handleCompletion = (id) => {
    let data = this.state.data
    data.forEach(item => {
      if (item.id === id) {
        item.completed = !item.completed
      } 
    })
    this.setState({data})
  }

  handleClearCompleted = () => {
    // needs to access state and remove all items from state that are marked as completed
    let data = this.state.data.filter(task => task.completed !== true)
    //set state to new data array
    console.log(data)
    
    this.setState({data})
    console.log(this.state)
  }

  addToDo = (string) => {
    //function needs to add a to do to data array in state 
    //This will be an input from user (task)
    //The id must be auto created and the completed prop must be false 
    string = this.state.taskName;
    let newTask = {task: string, id: Date.now(), completed: false};
    this.setState(state => {
      const data = this.state.data.push(newTask);
      return data
    })
  }

  handleInput = e => {
   this.setState({taskName: e.target.value})
   console.log(this.state.taskName)
  }
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleCompletion={this.handleCompletion} items={this.state.data}/>
        <TodoForm newTask={this.state.newTask} addToDo={this.addToDo} handleInput={this.handleInput} addToDo={this.addToDo} handleClearCompleted={this.handleClearCompleted} />
      </div>
    );
  }
}

export default App;
