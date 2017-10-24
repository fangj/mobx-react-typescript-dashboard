import * as React from 'react'
import * as styles from './layout.less'
import * as Menus from './menus'
import * as config from '../utils/config'

class Sider extends React.Component {
  render () {
    const { sidebarFold, menukey } = this.props

    const menuProps = {
        menukey,
      sidebarFold,
      onMenuClick () { }
    }
      return (
      <div>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} />
          {sidebarFold ? <span /> : <span>{config.name}</span>}
        </div>
        <Menus {...menuProps} />
      </div>
    )
  }
}

export default Sider
