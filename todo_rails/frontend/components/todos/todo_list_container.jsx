import { connect } from 'react-redux';
import ToDoList from './todo_list.jsx';
import { allTodos } from '../../reducers/selectors.js';
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions.js';

const mapStateToProps = (state) => {
    return { todos: allTodos(state) };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        fetchTodos: () => dispatch(fetchTodos()),
        createTodo: (todo) => dispatch(createTodo(todo))
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);