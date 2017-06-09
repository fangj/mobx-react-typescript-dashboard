import * as React from "react";
import TodoAppView from "../components/todo/TodoAppView";
import TodoListStore from "../stores/TodoListStore";
import TodoStore from "../stores/TodoStore";
import "../mock/TodoMock"; //mock data for test ajax
import TodoService from "../services/TodoService";
// require ("./TodoListStore.less");

const todoListStore = new TodoListStore();
todoListStore.todoStores.push(
    new TodoStore("Get Coffee"),
    new TodoStore("Write simpler code")
);
todoListStore.todoStores[0].finished = true;

const todoService=new TodoService();
todoService.getTodoList().then(titles => {
    todoListStore.addTitles(titles);
});

export default () => {
    return (<TodoAppView todoListStore={todoListStore}/>)
}