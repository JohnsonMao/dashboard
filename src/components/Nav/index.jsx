import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <ul className="btn-group">
                <li className="col active"><button className="btn">全部</button></li>
                <li className="col"><button className="btn">待完成</button></li>
                <li className="col"><button className="btn">已完成</button></li>
            </ul>
        )
    }
}
