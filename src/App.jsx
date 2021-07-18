import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="h1 py-4">TODOLIST</h1>

                <div className="input-group bg-white box-shadow rounded-1 overflow-hidden mb-2">
                    <input type="text" className="form-control flex-fill border-0" placeholder="新增代辦事項"/>
                    <button type="button" className="btn btn-size-lg btn-dark rounded-1 m-1">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>

                <div className="bg-white box-shadow rounded-1 overflow-hidden">
                    <ul className="nav">
                        <li className="col active"><a href="#">全部</a></li>
                        <li className="col"><a href="#">待完成</a></li>
                        <li className="col"><a href="#">已完成</a></li>
                    </ul>

                    <ul className="list-group vh-55">
                        <li className="input-group">
                            <input type="checkbox" name="check" id="1" className="form-check m-4"/>
                            <label htmlFor="1" className="flex-fill py-4">test</label>
                            <button type="button" className="btn btn-size-base list-btn m-4">
                                <i class="fas fa-times"></i>
                            </button>
                        </li>
                        <li className="input-group">
                            <input type="checkbox" name="check" id="2" className="form-check m-4"/>
                            <label htmlFor="2" className="flex-fill py-4">test2</label>
                            <button type="button" className="btn btn-size-base list-btn m-4">
                                <i class="fas fa-times"></i>
                            </button>
                        </li>
                    </ul>
                    
                    <div className="d-flex justify-content-between p-4">
                        <h3 className="text-dark-gray mb-2"><span>X</span>個待完成項目</h3>
                        <button type="button" className="btn btn-text-gray me-7 p-0 mb-2">清除已完成項目</button>
                    </div>
                </div>
            </div>
        )
    }
}
