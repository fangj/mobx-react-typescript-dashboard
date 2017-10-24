import * as React from 'react';

import "./MainFrame.less";

import {hashHistory} from 'react-router';
import * as moment from "moment";
import TeacherMenu from './menu/TeacherMenu.jsx';
import StudentMenu from './menu/StudentMenu.jsx';
import {userStore} from "../stores/UserStore";
import '../themes/skin.less'
import * as classnames from 'classnames'
import * as Layout from '../layout'
const { Header, Sider, LayoutStyles } = Layout;

export default class MainFrame extends React.Component<any, any> {

    render() {
        const {children} = this.props;
        const sidebarFold = false,
            fullScreen = false,
            sidebarBgColor = 'red',
            sidebarBgImg = '1',
            isShowSidebarBgImg = true,
            // Responsive Sidebar
            siderRespons = document.body.clientWidth < 1201,
            menuResponsVisible = false;
        const menukey='dashboard';
        const siderbarProps = {
            sidebarFold,
            menukey
        }
        const dispatch=()=>{};
        const headerProps = {
            fullScreen,
            sidebarFold,
            siderRespons,
            menuResponsVisible,
            onLock () {
                dispatch({ type: 'app/lock' })
            },
            onFull (element) {
                if (element.requestFullscreen) {
                    element.requestFullscreen()
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen()
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen()
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen()
                }
                dispatch({ type: 'app/switchFullScreen' })
            },
            onExitFull () {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen()
                }
                dispatch({ type: 'app/switchFullScreen' })
            },
            onLogout () {
                hashHistory.push('/login')
            },
            onSwitchSidebar () {
                dispatch({ type: 'app/switchSidebar' })
            },
            onSwitchMenuPopover () {
                dispatch({ type: 'app/switchMenuPopver' })
            }
        }
        return (
            <div
                className={classnames(LayoutStyles.layout, {[LayoutStyles.fold]: siderRespons ? false : sidebarFold}, {[LayoutStyles.responsive]: siderRespons})}>
                {
                    !siderRespons
                        ? <aside
                            className={classnames(LayoutStyles.siderbar, LayoutStyles[`siderbar-bg-${sidebarBgColor}`])}>
                            {
                                isShowSidebarBgImg
                                    ? <div className={LayoutStyles['siderbar-bg-img']}
                                           style={{backgroundImage: `url(${require(`../assets/img/sidebar-${sidebarBgImg}.jpg`)})`}}/>
                                    : ''
                            }
                            <Sider {...siderbarProps} />
                        </aside>
                        : ''
                }
                <div className={LayoutStyles.main}>
                    <Header {...headerProps} />
                    <div className={LayoutStyles.container}>
                        <div className={LayoutStyles.content}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
