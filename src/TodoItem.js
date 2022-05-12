import { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 在 constructor 里绑定deleteItem的 this 指向为 TodoItem 组件
        // 在 constructor 里绑定有利于后续性能优化
        this.deleteItem = this.deleteItem.bind(this);
    }

    render () {
        // 通过 this.props.属性名 来使用父组件传过来的数据
        // 记得用 JSX 的语法, JS 表达式用大括号
        return <div
                    onClick={this.deleteItem}
                >
                    {/* 子组件通过 this.props.### 来使用父组件传来的值 */}
                    {this.props.content}
                </div>
    }

    deleteItem () {
        // 子组件通过 this.props.### 来使用父组件传来的值
        // 此时两个 this 都指向 TodoItem
        this.props.handleItemDelete(this.props.index)
    }
}

export default TodoItem;