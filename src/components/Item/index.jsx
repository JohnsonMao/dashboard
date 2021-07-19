import React, { Component } from 'react';

export default class Item extends Component {

    // 是否勾選的回調函數，使用高階函數的方法
    handleCheck = ( id ) => {
        return ( event ) => {
            this.props.updateTodo( id, event.target.checked )
        }
    }

    // 刪除一個 todo 的回調函數，不使用高階函數的方法
    handleDelete = ( id ) => {
        if( window.confirm('確定刪除嗎？') ){
            this.props.deleteTodo( id );
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
                    <button type="button" 
                    onClick = { () => this.handleDelete(id) }
                    className="btn btn-size-base list-btn-warning m-4">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            </div>
        )
    }
}
