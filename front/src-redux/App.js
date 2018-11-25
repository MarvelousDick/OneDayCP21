import React, {Component} from 'react';
import './App.css';

import {increment, decrement, incrementAsync} from './redux/actions'

import PropTypes from 'prop-types';

class App extends Component {

    static propTypes = {
        store: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }

    increment = () => {
        const number = this.select.value * 1
        this.props.increment(number)
    }

    decrement = () => {
        const number = this.select.value * 1
        this.props.store.dispatch(decrement(number))
    }

    incrementIfOdd = () => {
        let count = this.props.store.getState()
        if (count % 2 === 1) {
            const num = this.select.value * 1
            this.props.increment(num)
        }
    }

    incrementAsync = () => {
        const num = this.select.value * 1
        this.props.store.dispatch(incrementAsync(num))
    }

    render() {
        const count = this.props.store.getState()
        // debugger
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        );
    }
}

export default App;