import React from 'react';

const Todo = props => {
    console.log(props.item, 'todo props')
    let handleCompletion = props.handleCompletion
    
    return (
    <p onClick={() => handleCompletion(props.item.id) }>{props.item.task}</p>
    )
};

export default Todo;