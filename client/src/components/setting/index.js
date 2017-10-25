import * as React from 'react'
import * as classnames from 'classnames'
import { Row, Col, Tag, Switch } from 'antd'
import {observer} from "mobx-react";

import * as styles from './setting.less'
import {globalStore} from "../../stores/GlobalStore";

const img1 = require('../../assets/img/sidebar-1.jpg')
const img2 = require('../../assets/img/sidebar-2.jpg')
const img3 = require('../../assets/img/sidebar-3.jpg')
const img4 = require('../../assets/img/sidebar-4.jpg')

@observer
class Setting extends React.Component {

  handleSettingColor = (color) => {
      globalStore.switchSidebarBgColor(color);
  }

  handleSettingImg = (img) => {
      globalStore.switchSidebarBgImg(img)
  }

  handleSettingImgIsClose = () => {
      globalStore.switchIsShowSidebarBgImg();
  }

  render () {
    const { sidebarBgImg, sidebarBgColor } = globalStore;
    const isShowSidebarBgImg=globalStore.isShowSidebarBgImg;
    return (
      <div className={styles.container}>
        <Row>
          <Col span={24}>
            <h2>SIDEBAR BACKGROUND</h2>
            <Tag color='#d80b0b' className={classnames(styles.tags, { [styles.tagActive]: sidebarBgColor === 'red' || false })} onClick={() => this.handleSettingColor('red')} />
            <Tag color='#000' className={classnames(styles.tags, { [styles.tagActive]: sidebarBgColor === 'black' || false })} onClick={() => this.handleSettingColor('black')} />
            <Tag color='#ff9800' className={classnames(styles.tags, { [styles.tagActive]: sidebarBgColor === 'yellow' || false })} onClick={() => this.handleSettingColor('yellow')} />
            <Tag color='#1e90ff' className={classnames(styles.tags, { [styles.tagActive]: sidebarBgColor === 'blue' || false })} onClick={() => this.handleSettingColor('blue')} />
          </Col>
          <Col span={32}>
            <h2>SIDEBAR BACKGROUND IMAGE</h2>
            <Switch checkedChildren='ON' unCheckedChildren='OFF' size='default' checked={isShowSidebarBgImg} onChange={this.handleSettingImgIsClose} />
            <Row gutter={48}>
              <Col span={6}>
                <img alt='sidebar-bg' className={classnames(styles.sidebarImg, { [styles.active]: sidebarBgImg === '1' || false })} src={img1} onClick={() => this.handleSettingImg('1')} />
              </Col>
              <Col span={6}>
                <img alt='sidebar-bg' className={classnames(styles.sidebarImg, { [styles.active]: sidebarBgImg === '2' || false })} src={img2} onClick={() => this.handleSettingImg('2')} />
              </Col>
              <Col span={6}>
                <img alt='sidebar-bg' className={classnames(styles.sidebarImg, { [styles.active]: sidebarBgImg === '3' || false })} src={img3} onClick={() => this.handleSettingImg('3')} />
              </Col>
              <Col span={6}>
                <img alt='sidebar-bg' className={classnames(styles.sidebarImg, { [styles.active]: sidebarBgImg === '4' || false })} src={img4} onClick={() => this.handleSettingImg('4')} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Setting
