import * as React from "react";
import * as ReactDOM from "react-dom";

import {hashHistory, Route, Router} from "react-router";
import HomePage from "./routes/HomePage";
import TodoList from "./routes/TodoList";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/homepage" component={HomePage}/>
        <Route path="/todolist" component={TodoList}/>
        <Route path="*" component={TodoList}/>
    </Router>
), document.getElementById('root'));