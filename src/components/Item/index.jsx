import React, { Component } from 'react';

export default class Item extends Component {

    // 是否勾選的回調函數
    handleCheck = (id) => {
        return ( event ) => {
            this.props.updateTodo( id, event.target.checked )
        }
    }

    render() {
        const { id, name, done } = this.props;
        return (
            <div>
                <li className="input-group">
                    <input type="checkbox" id={ id }
                    className="form-check m-4"
                    checked={ done }
                    onChange={ this.handleCheck( id ) } />
                    <label htmlFor={ id } className="flex-fill py-4">
                        { done ? <del>{ name }</del> : name }
                    </label>
                    <button type="button" className="btn btn-size-base list-btn-warning m-4">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            </div>
        )
    }
}
