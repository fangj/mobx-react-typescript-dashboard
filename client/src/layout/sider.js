import * as React from 'react'
import * as styles from './layout.less'
import * as Menus from './menus'
import * as config from '../utils/config'
import { Layout,Icon }  from 'antd';
const { Header, Footer, Sider } = Layout;
class MySider extends React.Component {
  render () {
    const { sidebarFold, menukey } = this.props

    const menuProps = {
        menukey,
      sidebarFold,
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
          <Menus {...menuProps} />
      </Sider>)
  }
}

export default MySider
