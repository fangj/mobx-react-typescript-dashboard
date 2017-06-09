/**
 * Created by FangJian on 2017/6/6.
 */

import {observer} from "mobx-react";
import * as React from "react";
import TodoListStore from "../../stores/TodoListStore";
import * as style from "./SummaryView.less";

interface ISummaryView {
    todoListStore: TodoListStore;
}

const SummaryView = observer((props: ISummaryView) =>
    <div className={style.summary}>Tasks Left: {props.todoListStore.unfinishedTodoCount}</div>
);
export default SummaryView;