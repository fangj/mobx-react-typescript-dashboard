/**
 * Created by FangJian on 2017/10/29.
 */
import * as React from "react";
import {observer} from "mobx-react";
import { Modal, Button } from 'antd';

import BookingStore from "../../stores/BookingStore";
import {default as BigCalendar} from 'react-big-calendar';
import * as moment from 'moment';
import {toJS} from "mobx";
// import {default as events} from "./demo_events.js";
require("react-big-calendar/lib/css/react-big-calendar.css");
moment.locale("zh-cn");
BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);


require('./Booking1.css');

interface IBooking1 {
    type:string,
    store: BookingStore
}

@observer
export default class Booking1 extends React.Component<IBooking1, {}> {

    //  static defaultProps: IBooking1 = {
    // store: new Store()
    //  };

    render() {
        const store = this.props.store;
        const events=toJS(store.events);
        return (<div>
            <BigCalendar
                selectable
                events={events}
                step={15}
                timeslots={4}
                defaultView='week'
                defaultDate={new Date(2015, 3, 12)}
                onSelectEvent={this.showConfirm}
                onSelectSlot={this.onBooking}
            />
        </div>)
    }
    showConfirm=(event)=>{
        //点击已预约事件，是否删除
        Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: event.title,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    onBooking=(slotInfo)=>{
        //预定
        console.log(slotInfo)
        const store = this.props.store;
        const type = this.props.type;
        store.book(type,slotInfo.start,slotInfo.end);
    }

}