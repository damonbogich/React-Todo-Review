//will get the todo list data and iterate over it creating a new todo for each item
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props, 'props from TodoList')
    let items = props.items
    console.log(items, 'items here')

    return (
        items.map(item => {
            console.log(item)
            return <Todo task={item.task} key={item.id}/>
        })
    )
}
export default TodoList