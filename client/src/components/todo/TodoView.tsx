/**
 * Created by FangJian on 2017/6/6.
 */
import * as React from "react";
import {observer} from "mobx-react";
import TodoStore from "../../stores/TodoStore";
//import * as styles from './TodoView.less';

interface ITodoView {
    todoStore: TodoStore
}

@observer
export default class TodoView extends React.Component<ITodoView, {}> {

    static defaultProps: ITodoView = {
        todoStore: new TodoStore("TodoItem")
    };

    render() {
        const todoStore = this.props.todoStore;
        return (<li>
            <input
                type="checkbox"
                checked={todoStore.finished}
                onChange={e => todoStore.toggle()}
            />{todoStore.title}
        </li>)
    }
}