import { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 在 constructor 里绑定deleteItem的 this 指向为 TodoItem 组件
        // 在 constructor 里绑定有利于后续性能优化
        this.deleteItem = this.deleteItem.bind(this);
    }

    render () {
        // 解构赋值取到 content
        const {content} = this.props;
        return <div
                    onClick={this.deleteItem}
                >
                    {content}
                </div>
    }

    deleteItem () {
        // 解构赋值优化
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}

export default TodoItem;