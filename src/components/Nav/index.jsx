import React, { Component } from 'react'

export default class Nav extends Component {

    // React.createRef 調用後可以返回一個容器，該容器可以儲存被 ref 所標記的節點
    updateFilter = React.createRef()

    // handleDisplayAll 用來顯示全部的清單
    handleDisplayAll = (event) => {
        console.log(this.updateFilter.current.children, event.target.id);
    }

    // handleDisplayUndone 用來顯示待完成的清單
    handleDisplayUndone = () => {
    }

    // handleDisplayDone 用來顯示完成的清單
    handleDisplayDone = () => {

    }

    render() {
        return (
            <ul ref = { this.updateFilter } className="btn-group">
                <li className="col active">
                    <button className="btn" id="all"
                    onClick={ this.handleDisplayAll }>全部</button>
                </li>
                <li className="col">
                    <button className="btn" id="undone"
                    onClick={ this.handleDisplayUndone }>待完成</button>
                </li>
                <li className="col">
                    <button className="btn" id="done"
                    onClick={ this.handleDisplayDone }>已完成</button>
                </li>
            </ul>
        )
    }
}
