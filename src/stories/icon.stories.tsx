import React from 'react';

import {storiesOf} from "@storybook/react"
import Icon from "../components/Icon/index";


const component = () => (
    <div style={{backgroundColor: 'red', height: 40}}>
        <Icon icon="arrow-down" theme="primary" size="10x" />
    </div>
);
storiesOf('icon 组件', module)
    .add('icon', component)
;
