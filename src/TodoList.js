import { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render () {
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
                            // ref 属性是一个箭头函数, 将 ref 获取到的 dom 节点作为一个属性存在组件对象上: this.input
                            ref={(input) => {this.input = input}}
                        />
                        <button
                            onClick={this.handleBtnClick}
                        >提交</button>
                    </div>
                    {/* 列表项 */}
                    <ul
                        ref={(ul) => {this.ul = ul}}
                    >
                        {this.getTodoItem()}
                    </ul>
                    <div>父向子组件传值: 父组件把自己的数据以属性的方式写在子组件上, 子组件在子组件内部通过this.props.属性名 来使用传过来的值</div>
                    <br />
                    <div>子调用父组件的方法: 父将自己的方法 bind 在自己的作用域上, 通过属性的形式传给子, 子通过this.props.###来调用父组件传来的方法</div>
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
                // e.target 返回的就是 onChange 事件对应的 input 元素节点, React 中也可以通过 Dom 上的 ref 属性来获取元素节点
                // inputValue: e.target.value
                inputValue: this.input.value
            }))
    }

    handleBtnClick () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
            // 这里有坑, this.setState是一个异步函数!
            // 如果把 console 放在 setState 外, 会先执行作为微任务的 console, 后执行作为宏任务的 setState, 而此时页面的数据还没变化, 函数表现可能造成不符合常规思路
            // 我们可以把 依赖数据变化后执行的逻辑 以箭头函数函数体的形式, 作为 setState 的第二个参数
            // 这样, 第二个参数就会异步的在 setState 修改数据后, 去执行依赖数据变化的逻辑了
        }),
            // 第二个参数: 箭头函数
            () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    handleItemDelete (index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}

export default TodoList;