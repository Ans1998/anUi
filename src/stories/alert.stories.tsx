import React from 'react';
import Alert from "../components/Alert/index"
import {storiesOf} from "@storybook/react"


const component = () => (
    <div>
      <div>
          <Alert title='提示标题aaa' altType="success">测试测试测试aaa</Alert>
      </div>
        <div style={{marginTop: 10}}>
            <Alert altType="default">测试测试测试aaa</Alert>
        </div>
        <div style={{marginTop: 10}}>
            <Alert title='提示标题aaa' altType="danger" duration={2000}>测试测试测试aaa</Alert>
        </div>
        <div style={{marginTop: 10}}>
            <Alert altType="warning">测试测试测试aaa</Alert>
        </div>
    </div>
);
storiesOf('alert 组件', module)
    .add('alert', component)
;
