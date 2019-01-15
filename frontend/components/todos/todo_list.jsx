import React from 'react';
import ToDoListItem from '../todo_list/todo_list_item.jsx';

const todo = (props) => {
    const toDoItems = props.todos.map( todo => ToDoListItem(todo));
    return(
        <>
        <h2>Todo list</h2>
        <ul>{toDoItems}</ul>
        </>
    );
};

export default todo;
