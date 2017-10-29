/**
 * Created by FangJian on 2017/10/29.
 */
import {computed, observable} from "mobx";

export default class BookingStore {
    //可预订的实验项目
    @observable items = [
        {name:"电路实验",type:"dianlu"},
        {name:"数字放大器实验",type:"fangdaqi"},
    ];


}