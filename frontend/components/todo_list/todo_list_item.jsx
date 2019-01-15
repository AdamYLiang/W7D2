import React from 'react';

class ToDoListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<li>{this.props.todo.title}</li>)
    }
}

export default ToDoListItem;