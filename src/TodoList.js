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