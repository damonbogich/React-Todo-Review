import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input placeholder= "addtodo" />
            <button>Add Todo</button>
            <button onClick={() => props.handleClearCompleted()}>Clear Completed</button>
        </div>
    )
}

export default TodoForm