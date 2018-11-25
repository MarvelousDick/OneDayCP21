import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

import CpInterface from './components/cp-interface/cp-interface'

// 定义渲染根组件标签的函数
ReactDOM.render(
    (
        <Provider store={store}>
            <CpInterface/>
        </Provider>
    ),
    document.getElementById('root')
)
