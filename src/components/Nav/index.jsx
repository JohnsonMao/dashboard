import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="col active"><a href="#">全部</a></li>
                <li className="col"><a href="#">待完成</a></li>
                <li className="col"><a href="#">已完成</a></li>
            </ul>
        )
    }
}
