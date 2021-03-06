import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./antd.module.less"; //用antd.custom.min.css替代


import {hashHistory, Route, Router,IndexRoute} from "react-router";
import HomePage from "./routes/HomePage";

import LoginPage from "./routes/LoginPage";
import TodoList from "./routes/TodoList";
import MainFrame from "./frame/MainFrame";
import Dashboard from "./routes/Dashboard";
import Setting from "./routes/Setting";
import Acknowledge from "./routes/Acknowledge";
import Lock from "./routes/Lock";
import Profile from "./routes/Profile";
import Alert from "./routes/Alert";
import Charts from "./routes/Charts";
import Editor from "./routes/Editor";
import Grid from "./routes/Grid";
import Map from "./routes/Map";
import Table from "./routes/Table";
import Table2 from "./routes/Table2";
import SchemaForm from "./routes/SchemaForm";


import {globalStore} from "./stores/GlobalStore";

const authentication = (nextState, replace) => {
    // console.log("authentication");
    //如果没有登陆就跳转到登录页
    if(!globalStore.isLogin){
        replace('/login')
    }
};
const onRouteChange = (nextState, replace) => {
    authentication(nextState,replace);
    const routes=nextState.routes;
    if(routes&&routes.length>0){
        const last_path=routes[routes.length-1].path;
        globalStore.menukey=last_path;
    }

};

ReactDOM.render((
    <Router history={hashHistory}>
        {/*<Route path="/todo" component={TodoList}/>*/}
        <Route path="/login" component={LoginPage}/>
        <Route path="/lock" component={Lock}/>
        <Route path="/" component={MainFrame} onEnter={onRouteChange}  onChange={onRouteChange}>
            <IndexRoute  component={Dashboard}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="profile" component={Profile}/>
            <Route path="setting" component={Setting}/>
            <Route path="alert" component={Alert}/>
            <Route path="charts" component={Charts}/>
            <Route path="editor" component={Editor}/>
            <Route path="grid" component={Grid}/>
            <Route path="map" component={Map}/>
            <Route path="table" component={Table}/>
            <Route path="acknowledge" component={Acknowledge}/>
            <Route path="form" component={SchemaForm}/>
            <Route path="table2" component={Table2}/>
        </Route>
    </Router>
), document.getElementById('root'));