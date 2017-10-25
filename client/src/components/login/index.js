import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Button, Row, Form, Input } from 'antd'
import * as config  from '../../utils/config'
import * as styles from './login.less'
import {observer} from "mobx-react";
import {loginStore} from "../../stores/LoginStore";

const FormItem = Form.Item

const Login = ({
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  const { loginLoading } = loginStore

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {

      if (errors) {
        return
      }
      loginStore.showLoginLoading();
      // wait for 1.5 seconds on purpose
      setTimeout(() => {
          loginStore.login(values)
      }, 1500)
    })
  }

  return (
    <div>
      <div className={styles.background} />
      <div className={styles.card}>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} />
          <span>{config.name}</span>
        </div>
        <form>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input size='large' onPressEnter={handleOk} placeholder='Username' />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input size='large' type='password' onPressEnter={handleOk} placeholder='Password' />)}
          </FormItem>
          <Row style={{ textAlign: 'center' }}>
            <Button type='dashed' ghost size='large' onClick={handleOk} loading={loginLoading}>
              SIGN IN
            </Button>
            <p><span>any username or password</span></p>
          </Row>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
}

export default Form.create()(observer(Login))
