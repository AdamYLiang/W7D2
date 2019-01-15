import React from 'react';
import ToDoListItem from '../todo_list/todo_list_item.jsx';
import ToDoListForm from '../todo_list/todo_list_form.jsx';

class ToDoList extends React.Component {
    render () {
        const { todos, receiveTodo } = this.props;
        const toDoItems = todos.map( todo => (
            <ToDoListItem 
            key={todo.id}
            todo={todo}
            receiveTodo={ receiveTodo } />
        ));

        return(
            <>
            <h2>Todo list</h2>
            <ul>{toDoItems}</ul>
            <ToDoListForm receiveTodo={ receiveTodo }/>
            </>
        );
    }
}

export default ToDoList;
