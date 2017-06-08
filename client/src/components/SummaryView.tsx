/**
 * Created by FangJian on 2017/6/6.
 */

import {observer} from "mobx-react";
import * as React from "react";
import TodoList from "../stores/TodoList";
// import * as style from "./style.css";
import * as style from "./SummaryView.less";

interface ISummaryView {
    todoList: TodoList;
}

const SummaryView = observer((props: ISummaryView) =>
    <div className={style.summary}>Tasks left: {props.todoList.unfinishedTodoCount}</div>
);
export default SummaryView;