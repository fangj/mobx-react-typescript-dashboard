/**
 * Created by FangJian on 2017/10/29.
 */
import * as React from "react";
import {observer} from "mobx-react";
import { Modal, Button } from 'antd';

import BookingStore from "../../stores/BookingStore";
import {default as BigCalendar} from 'react-big-calendar';
import * as moment from 'moment';
import {default as events} from "./demo_events.js";
require("react-big-calendar/lib/css/react-big-calendar.css");
moment.locale("zh-cn");
BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);



//import * as styles from './Booking1.less';

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
        const type = this.props.type;
        return (<div>
            <BigCalendar
                selectable
                events={events}
                step={15}
                timeslots={4}
                defaultView='week'
                defaultDate={new Date(2015, 3, 12)}
                onSelectEvent={event => this.showConfirm(event.title)}
                onSelectSlot={(slotInfo) => alert(
                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}`
                )}
            />
        </div>)
    }
    showConfirm=(title)=>{
        Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: title,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
}