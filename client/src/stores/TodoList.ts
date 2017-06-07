/**
 * Created by FangJian on 2017/6/6.
 */
import {computed, observable} from "mobx";
import Todo from "./Todo";

export default class TodoList {
    @observable todos = [];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    add(title: string) {
        this.todos.push(new Todo(title));
    }

    addTitles(titles: string[]) {
        titles.map(title => {
            this.todos.push(new Todo(title));
        })
    }
}