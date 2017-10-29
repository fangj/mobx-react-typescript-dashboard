/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
import {observer} from "mobx-react";
import { Tabs } from 'antd';
import BookingStore from "../../stores/BookingStore";
const TabPane = Tabs.TabPane;
import Booking1 from "./Booking1";

//import * as styles from './Booking.less';

interface IBooking {
    store: BookingStore
}

@observer
export default class Booking extends React.Component<IBooking, {}> {

    //  static defaultProps: IBooking = {
    // store: new Store()
    //  };

    render() {
        const store = this.props.store;
        return ( <Tabs type="card">
            {store.items.map(({name,type})=>
                (<TabPane tab={name} key={type}>
                    <Booking1 store={store} type={type}/>
                </TabPane>))}
        </Tabs>)
    }
}