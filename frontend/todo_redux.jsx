import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import { receiveTodos, receiveTodo } from './actions/todo_actions.js';

function Root() {
    return (<h1>Hello</h1>);
}

document.addEventListener('DOMContentLoaded', () => {
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    ReactDOM.render(<Root />, document.getElementById('root'));
});