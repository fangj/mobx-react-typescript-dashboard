/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
// require ("./SchemaForm.less");
import Booking from "../components/booking/Booking";
import {bookingStore} from "../stores/BookingStore";


export default () => {
    return (<div >
        <Booking store={bookingStore}/>
    </div>)
}