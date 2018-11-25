import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';

import TestComponent from './components/TestComponent/TestComponent'
import TestComponent2 from './components/TestComponent2/counter'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get starte7777777, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <TestComponent/>
                <TestComponent2/>
            </div>
        );
    }
}

export default App;