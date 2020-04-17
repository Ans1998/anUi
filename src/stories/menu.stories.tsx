import React from 'react';

import {storiesOf} from "@storybook/react"
import Menu from "../components/Menu";
import MenuItem from "../components/Menu/item";
import SubMenu from "../components/Menu/SubMenu";


const component = () => (
    <div>
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
storiesOf('menu 组件', module)
    .add('menu', component)
;
