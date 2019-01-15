import { connect } from 'react-redux';
import ToDoList from './todo_list.jsx';
import { allTodos } from '../../reducers/selectors.js';
import { receiveTodo } from '../../actions/todo_actions.js';

const mapStateToProps = (state) => {
    debugger
    return { todos: allTodos(state) };
};

const mapDispatchToProps = (dispatch) => {
    debugger
    return { receiveTodo: (todo) => dispatch(receiveTodo(todo)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);