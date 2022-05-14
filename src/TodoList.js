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
        // 组件初始化时, 就 bind 好组件方法的作用域, 有利于提高性能
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
                        />
                        <button
                            onClick={this.handleBtnClick}
                        >提交</button>
                    </div>
                    {/* 列表项 */}
                    <ul>
                        {/* 通过方法返回 dom, 优化代码语义化 */}
                        {this.getTodoItem()}
                    </ul>
                    <div>父向子组件传值: 父组件把自己的数据以属性的方式写在子组件上, 子组件在子组件内部通过this.props.属性名 来使用传过来的值</div>
                    <br />
                    <div>子调用父组件的方法: 父将自己的方法 bind 在自己的作用域上, 通过属性的形式传给子, 子通过this.props.###来调用父组件传来的方法</div>
            </Fragment>
        )
    }

    // 代码拆分: 借助一个方法, 将原本在组件上的逻辑放在方法里return出去执行, 优化代码语义化
    // 取而代之的在 dom 里执行这个方法就行
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
        // React 提倡的新写法, 给 setState 传一个函数, 函数 return 一个对象里面是需要修改的值
        // ES6 中可以直接省去 return, 将要返回的对象用小括号包裹
        this.setState(() => ({
                inputValue: e.target.value
            }))
    }

    handleBtnClick () {
        // setState里可以接受一个参数叫 prevState, prevState指的是修改数据之前的那次数据
        // 在这里 prevState 相当于 this.state
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete (index) {
        // setState 不仅可以返回修改的值, 还可以做函数逻辑操作, 对数据进行处理
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            // ES6便捷语法  这里的list 等价于 list: list
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