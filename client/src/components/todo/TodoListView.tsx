import * as React from "react";
import {observer} from "mobx-react";
import TodoView from "./TodoView";
import TodoStore from "../../stores/TodoStore";

interface ITodoListView {
    todoStores: TodoStore[];
}

const TodoListView = observer(
    ({todoStores=[]}: ITodoListView) =>
        <div>
            <ul>
                {todoStores.map(todoStore =>
                    <TodoView todoStore={todoStore} key={todoStore.id}/>
                )}
            </ul>
        </div>
);
export default TodoListView;