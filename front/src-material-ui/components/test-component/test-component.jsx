import React from 'react'
import {connect} from 'react-redux'

import {changeUserType, changeUserTypeToProfiled} from '../../redux/actions'

class TestComponent extends React.Component {

    componentDidMount() {
        //模拟异步获取数据
        // this.props.getComments()
    }

    increment = () => {
        const number = 3
        this.props.increment(number)
        console.log(this.props.counter)
    }

    changeType = () => {
        this.props.changeUserType(5)
    }

    changeTypeToUsed = () => {
        this.props.changeUserTypeToProfiled()
    }

    printType = () => {
        const a = this.props.userType
        console.log(a)
    }

    // testPrint = () => {
    //     const num = this.props.counter
    // }

    render() {
        // let customerType = this.props.customerType

        // let nu = this.props.counter
        // console.log(this.props.count)

        return (
            <div>
                00000
                <button onClick={this.increment}>+</button>
                <button onClick={this.changeType}>-</button>
                <button onClick={this.changeTypeToUsed}>-</button>
                <button onClick={this.printType}>-</button>
                <div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({userType: state.userType}),
    {changeUserType, changeUserTypeToProfiled}
)(TestComponent)