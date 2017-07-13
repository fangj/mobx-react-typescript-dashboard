import * as React from "react";
import TodoAppView from "../components/todo/TodoAppView";
import TodoListStore from "../stores/TodoListStore";
import "../mock/TodoMock"; //mock data for test ajax
import TodoService from "../services/TodoService";
// require ("./TodoListStore.less");

//初始化store
const todoListStore = new TodoListStore();

//直接push数据
todoListStore.todoItems.push(
    "Get Coffee",
    "Write simpler code"
);

//从service取得数据
const todoService=new TodoService();
todoService.getTodoList().then(titles => {
    titles.map(title=>todoListStore.add(title));
});

export default () => {
    return (<TodoAppView todoListStore={todoListStore}/>)
}