/**
 * Created by FangJian on 2017/6/6.
 */

import * as React from "react";
import {observer} from "mobx-react";
import SummaryView from "./SummaryView";
import TodoListView from "./TodoListView";
import TodoListStore from "../../stores/TodoListStore";
import DevTools from "mobx-react-devtools";
import * as styles from './style.css';

interface ITodoAppView {
    todoListStore: TodoListStore
}

@observer
export default class TodoAppView extends React.Component<ITodoAppView, {}> {

    static defaultProps: ITodoAppView = {
        todoListStore: new TodoListStore()
    }

    render() {
        const todoListStore = this.props.todoListStore;
        return <div className={styles.verticalContainer}>
            <div className={styles.todoContainer}>
                <TodoListView todoStores={todoListStore.todoStores}/>
                <SummaryView todoListStore={todoListStore}/>
                <DevTools />
            </div>
        </div>
    }
}

