import * as React from "react";
import * as ReactDOM from "react-dom";
import "./antd.module.less";


import {hashHistory, Route, Router,IndexRoute} from "react-router";
import HomePage from "./routes/HomePage";

import LoginPage from "./routes/LoginPage";
import TodoList from "./routes/TodoList";
import MainFrame from "./frame/MainFrame";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import Setting from "./routes/Setting";
import Acknowledge from "./routes/Acknowledge";
import Lock from "./routes/Lock";

const authentication = (nextState, replace) => {
    // console.log("authentication");
    //如果没有登陆就跳转到登录页
    // if(!Parse.User.current()){
    //     replace('/login')
    // }
};


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/login" component={LoginPage}/>
        <Route path="/lock" component={Lock}/>

        <Route path="/" component={MainFrame} onEnter={authentication}  onChange={authentication}>
            <IndexRoute  component={HomePage}/>
            <Route path="todo" component={TodoList}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="profile" component={Profile}/>
            <Route path="setting" component={Setting}/>
            <Route path="acknowledge" component={Acknowledge}/>

            <Route path="*" component={HomePage}/>
        </Route>
    </Router>
), document.getElementById('root'));