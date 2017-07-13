/**
 * Created by FangJian on 2017/6/6.
 */
import {observer} from "mobx-react";
import * as React from "react";
import TodoListStore from "../../stores/TodoListStore";
import * as style from "./SummaryView.less";

interface ISummaryView {
    todoListStore: TodoListStore
}

@observer
export default class SummaryView extends React.Component<ISummaryView, {}> {

    static defaultProps: ISummaryView = {
        todoListStore: new TodoListStore()
    };

    render() {
        const todoListStore = this.props.todoListStore;
        return (<div className={style.summary}>Tasks count: {todoListStore.count}</div>)
    }
}