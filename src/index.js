import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ReactDOM帮我们把 react 组件 挂载到某一个 dom 节点 上
// eg: 把 组件 app 挂载到 id = root 的dom节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* 这是 JSX 语法 */}
    <App />
  </React.StrictMode>
);
