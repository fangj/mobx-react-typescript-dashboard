import * as React from 'react'
import * as classnames from 'classnames'
import { Icon, Popover, Badge, Avatar, Input } from 'antd'
// import * as Menus from './menus'
import DataMenu from "./DataMenu";

import * as styles from './layout.less'
import {globalStore} from "../stores/GlobalStore";
// import {observer} from "mobx-react";

// @observer
class Header extends React.Component {
  render () {
    const {
      fullScreen,
      sidebarFold,
      onLock,
      onFull,
      onExitFull,
      onLogout,
      onSwitchSidebar,
      siderRespons,
      menuResponsVisible,
      onSwitchMenuPopover
      } = this.props;
      //
      // const sidebarFold=globalStore.sidebarFold;
      // const onSwitchSidebar=globalStore.onSwitchSidebar;
      // const onSwitchMenuPopover=globalStore.onSwitchMenuPopover;

      const msgs=globalStore.msgs;
    const msgContent = (
      <div>
          {msgs.map((msg,idx)=><p key={idx}><a>{msg}</a></p>)}
      </div>
    )

    const searchStyle = {
      width: 150,
      background: '0 0',
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderRadius: '2px'
    }

      const {  menukey,menuData } = globalStore;
      const menuProps = {
          menukey,
          onMenuClick () {
              if (siderRespons) {
                  onSwitchMenuPopover()
              }
          },
          data:menuData,
          sidebarFold
      }


      const popoverStyle = {
      fontSize: 12
    }

    const avatarStyle = {
      backgroundColor: '#555555'
    }

    return (
      <navbar-cmp>
        <nav className={classnames(styles.navbar, styles['navbar-transparent'], styles['navbar-absolute'])}>
          <div className={styles['navbar-container']}>
            {
              // Responsive Sidebar
              siderRespons
                ? <Popover
                  placement='bottomLeft'
                  onVisibleChange={onSwitchMenuPopover}
                  visible={menuResponsVisible}
                  trigger='click'
                  content={<DataMenu {...menuProps} />}
                  overlayClassName={styles.popmenu}>
                  <div className={styles.btn}><Icon type='bars' /></div>
                </Popover>
                : <div className={styles.btn} onClick={onSwitchSidebar}>
                  <Icon type={sidebarFold ? 'menu-unfold' : 'menu-fold'} style={{lineHeight:1.5}}/>
                </div>
            }
            <ul className={styles['navbar-right']}>
              <li>
                <Input placeholder='Search' style={searchStyle} />
              </li>
              <li>
                <a onClick={!fullScreen ? () => onFull(document.documentElement) : onExitFull}>
                  <Avatar size='small' icon={fullScreen ? 'shrink' : 'arrows-alt'} style={avatarStyle} />
                </a>
              </li>
              <li>
                <a>
                  <Popover overlayStyle={popoverStyle} content={msgContent} placement='bottomRight' title={msgs.length+" unread message"}>
                    <Badge count={msgs.length}>
                      <Avatar size='small' icon='notification' style={avatarStyle} />
                    </Badge>
                  </Popover>
                </a>
              </li>
              <li>
                <a>
                  <Popover overlayStyle={popoverStyle} content={<div><a onClick={onLogout}>Sign out</a></div>} placement='bottomRight' trigger='click'>
                    <Avatar size='small' icon='user' style={avatarStyle} />
                  </Popover>
                </a>
              </li>
              <li>
                <a onClick={onLock}>
                  <Avatar size='small' icon='unlock' style={avatarStyle} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </navbar-cmp>
    )
  }
}

export default Header
