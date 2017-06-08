import * as React from "react";
import {observer} from "mobx-react";
import TodoView from "./TodoView";
import Todo from "../../stores/Todo";

@observer
export default class TodoListView extends React.Component<{ todos: Todo[] }, {}> {
    render() {
        const todos = this.props.todos;
        return <div>
            <ul>
                {todos.map(todo =>
                    <TodoView todo={todo} key={todo.id}/>
                )}
            </ul>
        </div>
    }
}