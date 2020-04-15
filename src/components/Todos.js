import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {


    render() {
        return this.props.todos.map((todo) => (
            // <h3>{todo.title} </h3>
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
        ));
    }
}

// prop types
Todos.propType = {
    todo: PropTypes.array.isRequired
}
export default Todos;

