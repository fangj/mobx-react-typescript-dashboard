/**
 * Created by FangJian on 2017/10/29.
 */
import {computed, observable, toJS} from "mobx";
import * as _ from "lodash";

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

    @computed get objItems(){
        return _.keyBy(this.items, 'type');
    }


    book(type: string, start:Date, end:Date) {
        const item=this.objItems[type];
        const event:IEvent={
            title:item.name,
            start,
            end
        };
        this.remove(event);//删除可能重复的event
        this.events.push(event)
    }

    remove(event: IEvent) {
        const events=toJS(this.events);
        console.log(events)
        _.remove(events,event);
        console.log(events)
        this.events=events;
    }
}