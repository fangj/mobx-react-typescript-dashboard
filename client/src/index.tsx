import * as React from "react";
import * as ReactDOM from "react-dom";
import "./antd_style.less";


import {hashHistory, Route, Router,IndexRoute} from "react-router";
import HomePage from "./routes/HomePage";
import Dashboard from "./routes/Dashboard";
import LoginPage from "./routes/LoginPage";
import TodoList from "./routes/TodoList";
import MainFrame from "./frame/MainFrame";

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
        <Route path="/" component={MainFrame} onEnter={authentication}  onChange={authentication}>
            <IndexRoute  component={HomePage}/>
            <Route path="todo" component={TodoList}/>
            <Route path="dashboard" component={Dashboard}/>

            <Route path="*" component={HomePage}/>
        </Route>
    </Router>
), document.getElementById('root'));