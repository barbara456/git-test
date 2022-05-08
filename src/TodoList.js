import { Fragment } from "react";

function TodoList () {
    // JSX语法
    return (
    //   Fragment占位标签, 用来代替JSX 语法所要求的的外层必须包裹的一个 div, 并不会渲染为 dom 节点
    <Fragment>
            <div><input />  <button>提交</button></div>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
    </Fragment>
  );
}

export default TodoList;