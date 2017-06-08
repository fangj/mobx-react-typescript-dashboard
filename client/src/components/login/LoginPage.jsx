import * as React from "react";
import * as GeoPattern from "geopattern";
import * as cx from "classnames";
import LoginForm from "./LoginForm";
import * as styles from "./LoginPage.less";
const pattern = GeoPattern.generate('olx');

const bgStyle = {backgroundImage: pattern.toDataUrl()};

const LoginPage = () => <div className={cx(styles.loginBg, styles.verticalContainer)} style={bgStyle}>
    <LoginForm onSubmit={handleSubmit}/>
</div>;

const handleSubmit = (obj) => {
    console.log("handleSubmit", obj)
};

export default LoginPage;