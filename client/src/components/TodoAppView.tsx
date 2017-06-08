/**
 * Created by FangJian on 2017/6/6.
 */

import * as React from "react";
import {observer} from "mobx-react";
import SummaryView from "./SummaryView";
import ListView from "./TodoListView";
import TodoList from "../stores/TodoList";
import DevTools from "mobx-react-devtools";

interface ITodoAppView {
    todoList: TodoList
}

@observer
export default class TodoAppView extends React.Component<ITodoAppView, {}> {
    render() {
        const todoList = this.props.todoList;
        return <div>
            <ListView todos={todoList.todos}/>
            <SummaryView todoList={todoList}/>
            <DevTools />
        </div>
    }
}