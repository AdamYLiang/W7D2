export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const recieveTodos = (todos = []) => {
    return ({
        type: RECEIVE_TODOS,
        todos,
    });
};

export const receiveTodo = (todo) => {
    return ({
        type: RECEIVE_TODO,
        title: todo.title,
        body: todo.body,
        done: todo.done,
        id: Math.floor(Math.random * 1000),
    });
};
