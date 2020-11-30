import React from 'react';

const TodoForm = props => {
    let newTask = props.newTask
    return (
        <div>
            <input onChange={e => props.handleInput(e)} placeholder= "add a task"/>
            <button onClick={() => props.addToDo(newTask)}>Add Todo</button>
            <button onClick={() => props.handleClearCompleted()}>Clear Completed</button>
        </div>
    )
}

export default TodoForm