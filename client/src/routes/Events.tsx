/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
// require ("./SchemaForm.less");
import Events from "../components/booking/Events";
import {bookingStore} from "../stores/BookingStore";


export default () => {
    return (<div >
        <Events store={bookingStore}/>
    </div>)
}