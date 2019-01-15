import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions.js';
import { merge } from 'lodash';

const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TODO:
            const newTodo = { [action.id]: action.todo };
            return merge(state, newTodo);
        case RECEIVE_TODOS:
            const newTodos = {};
            action.todos.forEach( todo => newTodos[todo.id] = todo );
            return newTodos;
        default:
            return state;
    }
};

export default todosReducer;