/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
// require ("./SchemaForm.less");
import Doing from "../components/booking/Doing";
import {bookingStore} from "../stores/BookingStore";


export default () => {
    return (<div >
        <Doing store={bookingStore}/>
    </div>)
}