import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
    render() {
        return (
            <div className="list-frame vh-50">
                <ul className="list-group">
                    <Item />
                </ul>
            </div>
        )
    }
}
