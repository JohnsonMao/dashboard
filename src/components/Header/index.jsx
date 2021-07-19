import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="input-group bg-white box-shadow rounded-1 overflow-hidden mb-2">
                <input type="text" className="form-control flex-fill" placeholder="新增代辦事項"/>
                <button type="button" className="btn btn-size-lg btn-dark rounded-1 m-1">
                    <i className="fas fa-plus"></i>
                </button>
            </div>

        )
    }
}
