import * as React from 'react';
import { Menu, Icon} from 'antd';
import {hashHistory} from 'react-router';
import {userStore} from "../../stores/UserStore";
import {PropTypes} from 'prop-types';


const StudentMenu = ({mode}) => <Menu theme="dark" mode={mode}
                                      onClick={({key}) => {
                                          hashHistory.push(key);
                                          if (key === '/logout') {
                                              userStore.logout();
                                          }
                                      }}>
    <Menu.Item key="/student/home">
                  <span>
                    <Icon type="file"/>
                    <span className="nav-text">学生主页</span>
                  </span>
    </Menu.Item>
    <Menu.Item key="/student/course">
                <span>
                    <Icon type="file"/>
                    <span className="nav-text">学生课程</span>
                </span>
    </Menu.Item>
    <Menu.Item key="/student/SRTP">
                <span>
                    <Icon type="file"/>
                    <span className="nav-text">SRTP</span>
                </span>
    </Menu.Item>
    <Menu.Item key="/report/manage">
              <span>
                <Icon type="file"/>
                <span className="nav-text">实验报告</span>
              </span>
    </Menu.Item>
    <Menu.Item key="/change/password">
              <span>
                <Icon type="file"/>
                <span className="nav-text">修改密码</span>
              </span>
    </Menu.Item>
    <Menu.Item key="/logout">
              <span>
                <Icon type="user"/>
                <span className="nav-text">登出</span>
              </span>
    </Menu.Item>
</Menu>;

StudentMenu.defaultProps = {
    mode: "inline"
};
StudentMenu.propTypes = {
    mode: PropTypes.string
};
export default StudentMenu;