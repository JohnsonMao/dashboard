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

    // addTodo 用來添加 todo，接收的參數是 todo 物件
    addTodo = ( todoObj ) => {
        // 獲取原 todos
        const { todos } = this.state;
        // 新增一個 todos
        const newTodos = [todoObj,...todos];
        // 更新狀態
        this.setState({todos: newTodos});
    }

    // updateTodo 用來更新一個 todo 物件
    updateTodo = ( id, done ) => {
        // 獲取狀態中的 todos
        const { todos } = this.state;
        // 匹配數據處理
        const newTodos = todos.map( todoObj => {
            if( todoObj.id === id ) return {...todoObj, done}
            else return todoObj
        })
        // 更新狀態
        this.setState({todos: newTodos});
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="container">
                <h1 className="h1 py-4">TODOLIST</h1>
                <Header addTodo = { this.addTodo } />
                
                <div className="bg-white box-shadow rounded-1 overflow-hidden">
                    <Nav />
                    <List todos = { todos } updateTodo = { this.updateTodo } />
                    <Footer />
                </div>
            </div>
        )
    }
}
