/**
 * Created by FangJian on 2017/10/29.
 */
import {computed, observable} from "mobx";
interface IEvent{
    title: string,
    start: Date,
    end: Date
}

export default class BookingStore {
    //可预订的实验项目
    @observable.shallow items = [
        {name:"电路实验",type:"dianlu"},
        {name:"数字放大器实验",type:"fangdaqi"},
    ];

    @observable.shallow events:IEvent[]=[

    ];


    book(type: string, start:Date, end:Date) {
        const event:IEvent={
            title:type,
            start,
            end
        }
        this.events.push(event)
    }
}