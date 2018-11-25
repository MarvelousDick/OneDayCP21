import React from 'react';
// import {counter} from "../../redux/reducers";
// import PropTypes from 'prop-types';

class TestComponent extends React.Component {

    state = {
        count: 2
    }

    increment = () => {
        const number = this.select.value * 1
        const count = this.state.count + number
        this.setState({count})
    }

    decrement = () => {
        const num = this.select.value * 1
        const count = this.state.count - num
        this.setState({count: count})
    }

    incrementIfOdd = () => {
        let count = this.state.count
        if (count % 2 === 1) {
            const num = this.select.value * 1
            count += num
            this.setState({count})
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
            const num = this.select.value * 1
            const count = this.state.count + num
            this.setState({count})
        }, 1000)
    }

    render() {
        const {count} = this.state
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
        )
    }
}

export default TestComponent