import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div className="wrap">
                <h1 className="title">TODOLIST</h1>

                <div className="bg container-b">
                    <input type="text" className="enter" placeholder="新增代辦事項"/>
                    <input type="button" className="save" value="＋"/>
                </div>

                <div className="bg">
                    <ul className="container filter">
                        <li className="col-4 select sub active" data-filter="all">全部</li>
                        <li className="col-4 select sub" data-filter="no">待完成</li>
                        <li className="col-4 select sub" data-filter="done">已完成</li>
                    </ul>

                    <ul className="list">
                        <li className="done">
                        </li>
                    </ul>
                    
                    <div className="container-b footer">
                        <h3 className="total sub"></h3>
                        <input type="button" className="clear sub" value="清除已完成項目"/>
                    </div>
                </div>
            </div>
        )
    }
}
