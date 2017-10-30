/**
 * Created by FangJian on 2017/10/30.
 */

import * as React from "react";
import {observer} from "mobx-react";

//import * as styles from './Graph1.less';

interface IGraph1 {
    // store: Store
    url:string
}

@observer
export default class Graph1 extends React.Component<IGraph1, {}> {

    //  static defaultProps: IGraph1 = {
    // store: new Store()
    //  };

    render() {
        const url = this.props.url;
        return (<div>数字电路电路图 {url}</div>)
    }
}