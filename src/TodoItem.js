import { Component } from "react";
import propTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render () {
        const {content, test} = this.props;
        return <div 
                    onClick={this.deleteItem}
                >
                    {test} - {content}
                </div>
    }

    deleteItem () {
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}
// PropTypes 数据类型的强校验
TodoItem.propTypes = {
    test: propTypes.string.isRequired,
    content: propTypes.string,
    deleteItem: propTypes.func,
    index: propTypes.number
}
// 借助 defaultProps设置默认值
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;