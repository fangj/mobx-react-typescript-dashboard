import * as React from "react";
// require ("./LoginPage.less");
import LoginPage from "../components/login/index.js";

export default () => {
    return (<div>
        <LoginPage login={{loginLoading:false}}/>
    </div>)
}