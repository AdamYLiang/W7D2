import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import { receiveTodos, receiveTodo } from './actions/todo_actions.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});