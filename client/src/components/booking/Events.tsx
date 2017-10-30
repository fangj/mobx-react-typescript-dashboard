/**
 * Created by FangJian on 2017/10/30.
 */

import * as React from "react";
import {observer} from "mobx-react";
import { Card, Col, Row } from 'antd';
import BookingStore from "../../stores/BookingStore";
//import * as styles from './Doing.less';
import * as moment from "moment";
import {Link} from "react-router";
import {hashHistory} from 'react-router';

const formatDate=(date)=>{
    return moment(date).format("HH:mm");
}

interface IDoing {
    store: BookingStore
}

@observer
export default class Doing extends React.Component<IDoing, {}> {

    //  static defaultProps: IDoing = {
    // store: new Store()
    //  };

    render() {
        const store = this.props.store;
        const events=store.events;
        if(events.length===0){
            return (<h1>请先<Link to='/booking'>预约</Link>实验</h1>)
        }
        return (<div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
                {events.map((event,idx)=>
                    <Col span={8} key={idx}>
                        <div  onClick={e=>this.onEvent(event)}>
                        <Card title={event.title} bordered={false} style={{marginBottom:16}}>
                            <div>{moment(event.start).format("MMMDo")+" "+formatDate(event.start)+"~"+formatDate(event.end)}</div>
                        </Card>
                        </div>
                    </Col>)}
            </Row>
        </div>)
    }

    onEvent=(event)=>{
        console.log(event)
        hashHistory.push("/do/"+event.type);
    }
}