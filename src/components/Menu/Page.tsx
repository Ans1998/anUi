import React, {Component} from 'react';

import Menu from './index'
import MenuItem from "./item";
import SubMenu from "./SubMenu";

class MenuPage extends Component{
    // constructor(props) {
    //     super(props);
    // }
    // 组件渲染之前
    componentWillMount() {
    }
    // 组件已经被渲染到 DOM 中后运行
    componentDidMount() {
    }
    // 组件卸载
    componentWillUnmount() {
    }
    render() {
        return (
            <div style={{margin: 10}}>
                {/* mode="vertical" defaultOpenSubMenus={['3']} */}
                <Menu mode="vertical" defaultIndex='0' onSelect={(index) => { console.log(index) }}>
                    <MenuItem>aaa1</MenuItem>
                    <MenuItem disabled>aaa2</MenuItem>
                    <MenuItem>aaa3</MenuItem>
                    <SubMenu title="SubMenu-1">
                        <MenuItem>subMenu-item-1</MenuItem>
                        <MenuItem>subMenu-item-2</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default MenuPage;
