import React, { Component } from 'react'

export default class Footer extends Component {

    // 全選 checkbox 的回調函數
    handleCheckAll = ( event ) => {
        this.props.checkAllTodo( event.target.checked )
    }

    // 清除已完成的回調函數
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props;

        // 已完成的數量
        const doneCount = todos.reduce(( pre, todo ) => pre + ( todo.done ? 1 : 0 ), 0)
        // 總數
        const total = todos.length;

        return (
            <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                    <input type="checkbox" 
                    className="form-check m-4"
                    checked = { doneCount === total && total !== 0 ? true : false } 
                    onChange = { this.handleCheckAll } />
                    <h3 className="text-dark-gray">已完成 { doneCount } / 全部 { total }</h3>
                </div>
                <button type="button" 
                className="btn btn-text-warning m-4 me-8"
                onClick = { this.handleClearAllDone } >清除已完成項目</button>
            </div>
        )
    }
}
