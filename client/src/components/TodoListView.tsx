/**
 * Created by FangJian on 2017/6/6.
 */

import * as React from "react";
import {observer} from "mobx-react";
import TodoView from "./TodoView";
import SummaryView from "./SummaryView";
import TodoList from "../stores/TodoList";
import DevTools from "mobx-react-devtools";

@observer
export default class TodoListView extends React.Component<{ todoList: TodoList }, {}> {
    render() {
        const store = this.props.todoList;
        return <div>
            <ul>
                {store.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id}/>
                )}
            </ul>
            <SummaryView todoList={store}/>
            <DevTools />
        </div>
    }
}