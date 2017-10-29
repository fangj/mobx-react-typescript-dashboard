/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
import {observer} from "mobx-react";

//import * as styles from './Doing.less';

interface IDoing {
    // store: Store
}

@observer
export default class Doing extends React.Component<IDoing, {}> {

    //  static defaultProps: IDoing = {
    // store: new Store()
    //  };

    render() {
        // const store = this.props.store;
        return (<div>Doing</div>)
    }
}