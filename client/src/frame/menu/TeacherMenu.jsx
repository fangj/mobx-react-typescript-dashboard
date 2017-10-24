import * as React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import { hashHistory } from 'react-router';
import {userStore} from "../../stores/UserStore";
import {PropTypes} from 'prop-types';

const TeacherMenu = ({mode})=>(<Menu theme="dark" mode={mode}
    onClick={({key})=>{
        hashHistory.push(key);
        if(key==='/logout'){
            userStore.logout();
        }
    }}>
            <Menu.Item key="/teacher/home" >
              <span>
                <Icon type="copy" />
                <span className="nav-text">教师主页</span>
              </span>
            </Menu.Item>

    <SubMenu key="sub2" title={<span><Icon type="copy" /><span>实验报告</span></span>}>
        <Menu.Item key="/report/template/manage" >
              <span>
                <Icon type="copy" />
                <span className="nav-text">模板管理</span>
              </span>
        </Menu.Item>
        <Menu.Item key="/report/judge/manage">
              <span>
                <Icon type="file" />
                <span className="nav-text">报告批阅</span>
              </span>
        </Menu.Item>
    </SubMenu>
    <Menu.Item key="/measure/manage">
              <span>
                <Icon type="team" />
                <span className="nav-text">测量平台管理</span>
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
                <Icon type="user" />
                <span className="nav-text">登出</span>
              </span>
            </Menu.Item>
          </Menu>);

TeacherMenu.defaultProps={
	mode:"inline"
};
TeacherMenu.propTypes={
	mode:PropTypes.string
};
export default TeacherMenu;