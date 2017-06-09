/**
 * Created by FangJian on 2017/6/6.
 */
import {computed, observable} from "mobx";
import TodoStore from "./TodoStore";

export default class TodoListStore {
    @observable todoStores = [];

    @computed get unfinishedTodoCount() {
        return this.todoStores.filter(todo => !todo.finished).length;
    }

    add(title: string) {
        this.todoStores.push(new TodoStore(title));
    }

    addTitles(titles: string[]) {
        titles.map(title => {
            this.todoStores.push(new TodoStore(title));
        })
    }
}