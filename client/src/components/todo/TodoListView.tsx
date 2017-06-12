import * as React from "react";
import {observer} from "mobx-react";
import TodoStore from "../../stores/TodoStore";
import TodoView from "./TodoView";
//import * as styles from './TodoListView.less';

interface ITodoListView {
    todoStores: TodoStore[];
}

@observer
export default class TodoListView extends React.Component<ITodoListView, {}> {

    static defaultProps: ITodoListView = {
        todoStores:[]
    };

    render() {
        const todoStores = this.props.todoStores;
        return (<div>
            <ul>
                {todoStores.map(todoStore =>
                    <TodoView todoStore={todoStore} key={todoStore.id}/>
                )}
            </ul>
        </div>)
    }
}