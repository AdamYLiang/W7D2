import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import { fetchTodos } from './actions/todo_actions.js';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    window.fetchTodos = fetchTodos;
    ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});