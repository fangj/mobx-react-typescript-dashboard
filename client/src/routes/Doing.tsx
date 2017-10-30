/**
 * Created by FangJian on 2017/10/29.
 */

import * as React from "react";
// require ("./SchemaForm.less");
import Doing from "../components/doing/Doing";
import DoingStore from "../stores/DoingStore";


export default ({params}) => {
    const type=params["type"];
    const doingStore=new DoingStore();
    return (<div >
        <Doing type={type} store={doingStore}/>
    </div>)
}