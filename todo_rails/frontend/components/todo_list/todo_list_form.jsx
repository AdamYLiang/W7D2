import React from 'react';
import { uniqueId } from '../../util/id_generator.js';

class ToDoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { title: "", body: "", done: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // const todo = Object.assign({}, this.state, { id: uniqueId() });
        // this.props.receiveTodo(todo);
        const todo = Object.assign({}, this.state);
        this.props.createTodo(todo).then(
            () => {
                //cant seem to clear form
                this.setState({ title: '', body: '' });
            }
        );
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return( 
        <>
            <form className="add-todo-form" onSubmit={this.handleSubmit}>
                Title: <input type="text" onChange={this.update("title")} value={this.state.name} />
                Body: <input type="text" onChange={this.update("body")} value={this.state.name} />
                <input type="submit" value="Add new todo" />
            </form>
        </>
        )
    }
}

export default ToDoForm;