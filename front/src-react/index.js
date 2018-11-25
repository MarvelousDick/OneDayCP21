import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// 根据counter函数创建store对象

// 定义渲染根组件标签的函数


ReactDOM.render(
    (
        <App/>
    ),
    document.getElementById('root')
)

registerServiceWorker();
