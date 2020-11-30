//will get the todo list data and iterate over it creating a new todo for each item
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // console.log(props, 'props from TodoList')
    let items = props.items //array of items from data in state
    // console.log(items, 'items here')
    let handleCompletion = props.handleCompletion
    return (
        items.map(item => {
            // console.log(item, 'item in map')
            return <Todo handleCompletion={handleCompletion} item={item} key={item.id}/>
        })
    )
}
export default TodoList