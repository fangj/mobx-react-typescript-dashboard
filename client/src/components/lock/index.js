import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Button, Row, Input } from 'antd'
import * as config from '../../utils/config'
import * as styles from './lock.less'
import {globalStore} from "../../stores/GlobalStore";

const Lock = () => {
  function handleUnLock () {
    // dispatch({ type: 'app/unlock' })
      globalStore.unlock();
  }

  return (
    <div>
      <div className={styles.background} />
      <div className={styles.card}>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} />
          <span>Richardson</span>
        </div>
        <Row style={{ textAlign: 'center' }}>
          <Input size='large' placeholder='Enter Password' type='password' />
          <Button type='dashed' ghost size='large' onClick={handleUnLock}>UNLOCK</Button>
        </Row>
      </div>
    </div>
  )
}

Lock.propTypes = {
  login: PropTypes.object,
}

export default Lock;
