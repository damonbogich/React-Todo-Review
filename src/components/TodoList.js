//will get the todo list data and iterate over it creating a new todo for each item
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    let items = props.items 
    let handleCompletion = props.handleCompletion
    return (
        items.map(item => {
            return <Todo handleCompletion={handleCompletion} item={item} key={item.id}/>
        })
    )
}
export default TodoList