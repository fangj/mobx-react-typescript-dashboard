/**
 * Created by FangJian on 2017/6/7.
 */

import axios, {AxiosResponse} from "axios";
const getData = (resp: AxiosResponse) => resp.data;


export default class TodoService{
    getTodoList() {
        return axios.get("/mock/todolist").then(getData);
    }
}

