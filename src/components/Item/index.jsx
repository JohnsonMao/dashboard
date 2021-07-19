import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                <li className="input-group">
                    <input type="checkbox" name="check" id="1" className="form-check m-4"/>
                    <label htmlFor="1" className="flex-fill py-4">test</label>
                    <button type="button" className="btn btn-size-base list-btn-warning m-4">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                <li className="input-group">
                    <input type="checkbox" name="check" id="2" className="form-check m-4"/>
                    <label htmlFor="2" className="flex-fill py-4"><del>test2</del></label>
                    <button type="button" className="btn btn-size-base list-btn-warning m-4">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            </div>
        )
    }
}
