/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
import {observer} from "mobx-react";

//import * as styles from './Booking.less';

interface IBooking {
    // store: Store
}

@observer
export default class Booking extends React.Component<IBooking, {}> {

    //  static defaultProps: IBooking = {
    // store: new Store()
    //  };

    render() {
        // const store = this.props.store;
        return (<div>Booking</div>)
    }
}