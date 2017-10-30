/**
 * Created by FangJian on 2017/10/30.
 */

import * as React from "react";
import {observer} from "mobx-react";

//import * as styles from './Graph2.less';

interface IGraph2 {
    // store: Store
    url:string
}

@observer
export default class Graph2 extends React.Component<IGraph2, {}> {

    //  static defaultProps: IGraph2 = {
    // store: new Store()
    //  };

    render() {
        // const store = this.props.store;
        const url = this.props.url;
        return (<div>放大器电路图 {url}</div>)
    }
}