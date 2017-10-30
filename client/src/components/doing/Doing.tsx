/**
 * Created by FangJian on 2017/10/30.
 */

import * as React from "react";
import {observer} from "mobx-react";
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import Camera from "../camera/Camera";
import Graph1 from "../graph/Graph1";
import Graph2 from "../graph/Graph2";
import Devices from "../devices/Devices";
import DoingStore from "../../stores/DoingStore";
//import * as styles from './Doing.less';

interface IDoing {
    store: DoingStore,
    type:string
}

@observer
export default class Doing extends React.Component<IDoing, {}> {

    //  static defaultProps: IDoing = {
    // store: new Store()
    //  };

    render() {
        const store = this.props.store;
        const type = this.props.type;
        store.type=type;

        const Graphs={
            "dianlu":Graph1,
            "fangdaqi":Graph2
        };
        const Graph=Graphs[type];//电路图
        const graphProps=store.graphProps;
        const cameraProps=store.cameraProps;
        const devicesProps=store.devicesProps;
        return (<Tabs type="card">
            <TabPane tab="电路图" key="1"><Graph {...graphProps}/></TabPane>
            <TabPane tab="仪器" key="2"><Devices {...devicesProps}/></TabPane>
            <TabPane tab="摄像头" key="3"><Camera {...cameraProps}/></TabPane>
        </Tabs>)
    }
}