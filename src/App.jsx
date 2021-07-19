import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="h1 py-4">TODOLIST</h1>
                <Header />
                
                <div className="bg-white box-shadow rounded-1 overflow-hidden">
                    <Nav />
                    <List />
                    <Footer />
                </div>
            </div>
        )
    }
}
