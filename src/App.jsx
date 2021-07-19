import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {

    // 初始化狀態
    state = {todos: [
        {id: '001', name: '把冰箱發霉的檸檬拿去丟', done: false},
        {id: '002', name: '打電話叫媽媽匯款給我', done: true},
        {id: '003', name: '整理電腦資料夾', done: false},
        {id: '004', name: '繳電費水費瓦斯費', done: true},
        {id: '005', name: '刪訊息', done: false},
        {id: '006', name: '約 vicky 禮拜三泡溫泉', done: false},
        {id: '007', name: '約 ada 禮拜四吃晚餐', done: false},
    ]}

    render() {
        const { todos } = this.state;
        return (
            <div className="container">
                <h1 className="h1 py-4">TODOLIST</h1>
                <Header />
                
                <div className="bg-white box-shadow rounded-1 overflow-hidden">
                    <Nav />
                    <List todos = { todos } />
                    <Footer />
                </div>
            </div>
        )
    }
}
