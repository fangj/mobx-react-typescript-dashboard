/**
 * Created by FangJian on 2017/6/6.
 */

import {observer} from "mobx-react";
import * as React from "react";
import TodoList from "../stores/TodoList";

interface ISummaryView {
    todoList: TodoList;
}

const SummaryView = observer((props: ISummaryView) =>
    <div>Tasks left: {props.todoList.unfinishedTodoCount}</div>
);
export default SummaryView;