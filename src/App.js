import React from 'react';
import './components/TodoList';
import TodoList from './components/TodoList';

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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList items={this.state.data}/>
      </div>
    );
  }
}

export default App;
