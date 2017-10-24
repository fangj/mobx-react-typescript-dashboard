import * as React from "react";
import * as ReactDOM from "react-dom";

import {hashHistory, Route, Router,IndexRoute} from "react-router";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import TodoList from "./routes/TodoList";
import MainFrame from "./frame/MainFrame";
import "./antd_style.less";

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
            <Route path="*" component={HomePage}/>
        </Route>
    </Router>
), document.getElementById('root'));