import * as React from 'react'
import * as styles from './layout.less'
import * as Menus from './menus'
import * as config from '../utils/config'
import { Layout,Icon }  from 'antd';
const { Header, Footer, Sider } = Layout;
import {observer} from "mobx-react";

import DataMenu from "./DataMenu";

import {globalStore} from "../stores/GlobalStore";

@observer
class MySider extends React.Component {
  render () {
    const { sidebarFold, menukey } = this.props;
    const onMenuClick = globalStore.onMenuClick;
    const menuData=globalStore.menuData;
    const menuProps = {
        menukey,
        sidebarFold,
        onMenuClick,
        data:menuData
    }

      return (<Sider
          collapsible
          collapsed={sidebarFold}
          style={{height:"100vh",backgroundColor:"transparent"}}
          collapsedWidth={45}
          width={250}
          trigger={null}
      >
          <div className={styles.logo}>
             <img alt={'logo'} src={config.logo} />
             {sidebarFold ? <span /> : <span>{config.name}</span>}
           </div>
          {/*<Menus {...menuProps} />*/}
          <DataMenu {...menuProps} />
      </Sider>)
  }
}

export default MySider
