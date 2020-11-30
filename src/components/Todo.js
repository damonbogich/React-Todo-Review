import React from 'react';

const Todo = props => {
    console.log(props, 'todoprops')
    return (
    <p>{props.task}</p>
    )
};

export default Todo;