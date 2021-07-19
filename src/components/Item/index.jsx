import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const { id, name, done } = this.props;
        return (
            <div>
                <li className="input-group">
                    <input type="checkbox" id={ id }
                    className="form-check m-4"
                    defaultChecked={ done }/>
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
