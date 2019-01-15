import * as TodoAPIUtil from '../util/todo_api_utils.js';

export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const receiveTodos = (todos = []) => {
    return ({
        type: RECEIVE_TODOS,
        todos,
    });
};

export const receiveTodo = (todo) => {
    return ({
        type: RECEIVE_TODO,
        todo,
    });
};

export const fetchTodos = () => dispatch => (
    TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);