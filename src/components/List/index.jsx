import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

export default class List extends Component {

    // 對接收的 props 進行: 類型，必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    render() {
        const { todos, updateTodo } = this.props
        return (
            <div className="list-frame vh-55">
                <ul className="list-group">
                    {
                        todos.map( todo => {
                            return <Item key = { todo.id } 
                                {...todo} 
                                updateTodo = { updateTodo } />
                        })
                    }
                </ul>
            </div>
        )
    }
}
