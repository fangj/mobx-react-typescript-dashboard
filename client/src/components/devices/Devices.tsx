/**
 * Created by FangJian on 2017/10/30.
 */

import * as React from "react";
import {observer} from "mobx-react";

//import * as styles from './Devices.less';

interface IDevices {
    // store: Store
    sg:string,
    dg:string
}

@observer
export default class Devices extends React.Component<IDevices, {}> {

    //  static defaultProps: IDevices = {
    // store: new Store()
    //  };

    render() {
        const {sg,dg} = this.props;
        return (<div>Devices {sg} {dg}</div>)
    }
}