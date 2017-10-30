/**
 * Created by FangJian on 2017/10/26.
 */

import * as React from "react";
import {observer} from "mobx-react";
import {Menu, Icon} from 'antd'
import {Link} from "react-router";

const SubMenu = Menu.SubMenu

//import * as styles from './DataMenu.less';

interface IDataMenu {
    data: any[],
    sidebarFold:boolean,
    menukey:string,
    onMenuClick:()=>any
}

@observer
export default class DataMenu extends React.Component<IDataMenu, {}> {

    //  static defaultProps: IDataMenu = {
    // store: new Store()
    //  };

    recursion=(dataSource)=> {
        return (
            dataSource.map((menu, index) => {
                if (menu.children) {
                    return (
                        <SubMenu key={menu.key} title={<span><Icon type={menu.icon}/>{menu.title}</span>}>
                            {this.recursion(menu.children)}
                        </SubMenu>
                    )
                } else {
                    return (<Menu.Item key={menu.key}>
                                <Link to={menu.url}>
                                    <Icon type={menu.icon}/>{menu.title}
                                </Link>
                            </Menu.Item>)
                }
            })
        )
    }

    render() {
        const {data,sidebarFold, menukey,onMenuClick} = this.props;
        return (<Menu
                    mode={sidebarFold ? 'vertical' : 'inline'}
                    theme='light' onClick={onMenuClick}
                    selectedKeys={Array.of(menukey)}>
            {
                this.recursion(data)
            }
        </Menu>)
    }
}