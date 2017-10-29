/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
// require ("./SchemaForm.less");
import Booking from "../components/booking/Booking";
import BookingStore from "../stores/BookingStore";

const store=new BookingStore();

export default () => {
    return (<div >
        <Booking store={store}/>
    </div>)
}