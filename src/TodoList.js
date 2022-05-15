import { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import Test from "./Test";
import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的 state 或 props 发生改变的时候, render 函数就会重新执行, 获取新的数据来渲染页面
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render () {
        console.log('TodoList-render')
        return (
            <Fragment>
                    {/* 输入框和按钮 */}
                    <div>
                        <label htmlFor="insetArea">输入内容</label>
                        <input
                            id="insetArea"
                            className ='input'
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />
                        <button
                            onClick={this.handleBtnClick}
                        >提交</button>
                    </div>
                    {/* 列表项 */}
                    <ul>
                        {this.getTodoItem()}
                    </ul>
                    <div>父向子组件传值: 父组件把自己的数据以属性的方式写在子组件上, 子组件在子组件内部通过this.props.属性名 来使用传过来的值</div>
                    <br />
                    <div>子调用父组件的方法: 父将自己的方法 bind 在自己的作用域上, 通过属性的形式传给子, 子通过this.props.###来调用父组件传来的方法</div>
                    {/* test 子组件 render函数执行 测试 */}
                    {/* Test 组件 render 函数执行的原因有两点
                    1: Test 的 content 数据来自于父组件的 inputValue, inputValue 变化时, Test 组件的 render 函数监听到数据变化, 并执行
                    2: Test 组件在父组件的 render 函数内, 父组件的 inputValue 变化时, 父组件 render 函数执行, 执行了 render 函数内的 Test 组件, 也就执行了 Test 组件内的 render 函数 */}
                    <Test content={this.state.inputValue}></Test>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        content={item}
                        key={index}
                        index={index}
                        handleItemDelete={this.handleItemDelete}
                    />
                )
                })
    }

    handleInputChange (e) {
        this.setState(() => ({
                inputValue: e.target.value
            }))
    }

    handleBtnClick () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete (index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}









// function TodoList () {
//     // JSX语法
//     return (
//     //   Fragment占位标签, 用来代替JSX 语法所要求的的外层必须包裹的一个 div, 并不会渲染为 dom 节点
//     <Fragment>
//             <div>
//                 <input />
//                 <button>提交</button>
//             </div>
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//             </ul>
//     </Fragment>
//   );
// }

export default TodoList;