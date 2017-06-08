import * as React from "react";
import TodoAppView from "../components/TodoAppView";
import TodoList from "../stores/TodoList";
import Todo from "../stores/Todo";
import "../mock/TodoMock"; //mock data for test ajax
import * as TodoService from "../services/TodoService";
// require ("./TodoList.less");

const store = new TodoList();
store.todos.push(
    new Todo("Get Coffee"),
    new Todo("Write simpler code")
);
store.todos[0].finished = true;
TodoService.getTodoList().then(titles => {
    store.addTitles(titles);
});

export default () => {
    return (<TodoAppView todoList={store}/>)
}