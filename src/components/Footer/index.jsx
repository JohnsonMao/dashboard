import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                    <input type="checkbox" name="check" id="2" className="form-check m-4"/>
                    <h3 className="text-dark-gray">已完成 0 / 全部 2</h3>
                </div>
                <button type="button" className="btn btn-text-warning m-4 me-8">清除已完成項目</button>
            </div>
        )
    }
}
