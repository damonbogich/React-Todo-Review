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
      ]
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleCompletion={this.handleCompletion} items={this.state.data}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
