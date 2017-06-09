/**
 * Created by FangJian on 2017/6/6.
 */
import {observable} from "mobx";

export default class TodoStore {
    id = Math.random();
    @observable title;
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }

    toggle() {
        this.finished = !this.finished;
    }
}