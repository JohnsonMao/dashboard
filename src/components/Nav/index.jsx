import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nav extends Component {

    // 對接收的 props 進行: 類型，必要性的限制
    static propTypes = {
        filterBtn: PropTypes.func.isRequired,
    }

    // handleFilter 用來選擇過濾 todo 的代號
    handleFilter = ( event ) => {
        this.props.filterBtn( event.target.id );
    }

    render() {
        const { filterType } = this.props;
        return (
            <ul className="btn-group">
                <li className={ filterType === "all" ? 'col active' : 'col' }>
                    <button className="btn" id="all"
                    onClick={ this.handleFilter }>全部</button>
                </li>
                <li className={ filterType === "undone" ? 'col active' : 'col' }>
                    <button className="btn" id="undone"
                    onClick={ this.handleFilter }>待完成</button>
                </li>
                <li className={ filterType === "done" ? 'col active' : 'col' }>
                    <button className="btn" id="done"
                    onClick={ this.handleFilter }>已完成</button>
                </li>
            </ul>
        )
    }
}
