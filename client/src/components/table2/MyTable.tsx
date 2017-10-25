/**
 * Created by FangJian on 2017/10/25.
 */

import * as React from "react";
import {observer} from "mobx-react";

//import * as styles from './MyTable.less';

'react-bootstrap-table'
import * as ReactBsTable from 'react-bootstrap-table';
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;



var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];

interface IMyTable {
    // store: Store
}

@observer
export default class MyTable extends React.Component<IMyTable, {}> {

    //  static defaultProps: IMyTable = {
    // store: new Store()
    //  };

    render() {
        // const store = this.props.store;
        return (<BootstrapTable data={products} striped hover>
            <TableHeaderColumn isKey dataField='id' dataSort={true}>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={true}>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price' dataSort={true}>Product Price</TableHeaderColumn>
        </BootstrapTable>)
    }
}