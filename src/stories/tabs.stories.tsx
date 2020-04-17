import React from 'react';

import {storiesOf} from "@storybook/react"

import Tabs from "../components/Tabs";
import TabItem from "../components/Tabs/item";


const component = () => (
    <div>
        <Tabs defaultIndex={0} onSelect={(index) => {
            console.log(index)
        }}>
            <TabItem title="tab选项卡1" index={0} />
            <TabItem title="tab选项卡2" index={1} />
            <TabItem title="tab选项卡3" index={2} />
            <TabItem title="tab选项卡4" index={3} />
            <TabItem title="tab选项卡5" index={4} />
        </Tabs>
        <div>
            aaa
        </div>
    </div>
);
storiesOf('tabs 组件', module)
    .add('tabs', component)
;
