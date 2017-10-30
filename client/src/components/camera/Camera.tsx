/**
 * Created by FangJian on 2017/10/30.
 */

import * as React from "react";
import {observer} from "mobx-react";

//import * as styles from './Camera.less';

interface ICamera {
    // store: Store
    url:string

}

@observer
export default class Camera extends React.Component<ICamera, {}> {

    //  static defaultProps: ICamera = {
    // store: new Store()
    //  };

    render() {
        const url = this.props.url;
        return (<div>Camera {url}</div>)
    }
}