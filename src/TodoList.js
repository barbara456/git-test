import { Component, Fragment } from "react";
import './style.css'

// 一个类 就是一个组件
class TodoList extends Component {

    // 为什么要在constructor 里调用一次 super
    constructor(props) {
        super(props);

        // this.state是这个组件的状态, 负责存储组件里的数据
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render () {
        return (
            <Fragment>
                    <div>
                        {/* html中有一个 lable 标签, 作用是扩大点击区域 */}
                        {/* 我们希望点击 label 时, 鼠标能聚焦到输入框上, 通过在 input 上加 id 和 label 上加 htmlfor 来实现 */}
                        <label htmlFor="insetArea">输入内容</label>
                        <input
                            id="insetArea"
                            // 添加样式时, 用 className 代替 class, 不然react 会报警告, 觉得样式 class 和组件类 class 重名
                            className ='input'
                            // 在 JSX 的语法中使用 JS 表达式, 语法要求: 用大括号把 JS 表达式括起来
                            value={this.state.inputValue}
                            // React事件绑定语法需要把 on 后面的字符大写: onChange
                            // 同时 bind绑定 this 指向该组件
                            onChange={this.handleInputChange.bind(this)}
                        />
                        <button
                            onClick={this.handleBtnClick.bind(this)}
                        >提交</button>
                    </div>
                    <ul>
                        {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick = {this.handleItemDelete.bind(this, index)}
                                    // 希望 li 标签内支持以 html 语言展示item
                                    dangerouslySetInnerHTML = {{__html: item}}
                                >
                                    {/* {item} */}
                                </li>
                            )
                            })
                        }
                    </ul>
            </Fragment>
        )
    }

    handleInputChange (e) {
        // e 是事件对象, 作为参数传进方法
        this.setState({
            // e.target是对应的 dom 节点
            // 通过 e.target.value 借助 React 提供的 setState 方法 修改组件的 inputValue 值
            inputValue: e.target.value
        })
    }

    handleBtnClick () {
        // setState是 React 提供的修改数据的方法
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete (index) {
        // React里有一个概念immutable : 我们不被允许对 state 做任何直接的改变
        // 这个概念是为了后续做React的性能优化

        // 不让直接改 state 里的 list, 我们咋办, 很简单, 我们间接改
        // 拷贝一份 list, 做修改, 再通过 this.setState来修改 state 中 list 的值
        const list = [...this.state.list];
        list.splice(index, 1)

        this.setState({
            list: list
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