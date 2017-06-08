import * as React from "react";
import * as ReactDOM from "react-dom";

import {hashHistory, Route, Router} from "react-router";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import TodoList from "./routes/TodoList";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/login" component={LoginPage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/todo" component={TodoList}/>
        <Route path="*" component={LoginPage}/>
    </Router>
), document.getElementById('root'));