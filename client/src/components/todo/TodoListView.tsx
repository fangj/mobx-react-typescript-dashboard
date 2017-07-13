import * as React from "react";
import {observer} from "mobx-react";


interface ITodoListView {
    todoItems: string[]
}

@observer
export default class TodoListView extends React.Component<ITodoListView, {}> {

    static defaultProps: ITodoListView = {
        todoItems:[]
    };

    render() {
        const todoItems = this.props.todoItems;
        return (<div>
            <ul>
                {todoItems.map((todoItem,idx) =>
                    <li key={idx}>{todoItem}</li>
                )}
            </ul>
        </div>)
    }
}