/**
 * Created by FangJian on 2017/6/6.
 */
import * as React from "react";
import {observer} from "mobx-react";
import TodoStore from "../../stores/TodoStore";

interface ITodoView {
    todoStore: TodoStore;
}

const TodoView = observer(
    ({todoStore=new TodoStore("TodoItem")}: ITodoView) =>
        <li>
            <input
                type="checkbox"
                checked={todoStore.finished}
                onChange={e => todoStore.toggle()}
            />{todoStore.title}
        </li>
);
export default TodoView;