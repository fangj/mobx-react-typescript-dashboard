/**
 * Created by FangJian on 2017/6/6.
 */
import * as React from "react";
import {observer} from "mobx-react";
import Todo from "../../stores/Todo";

interface ITodoView {
    todo: Todo;
}

const TodoView = observer(({todo}: ITodoView) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onChange={e => todo.toggle()}
        />{todo.title}
    </li>
);
export default TodoView;