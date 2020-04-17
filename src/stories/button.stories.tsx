import React from 'react';

import { action } from '@storybook/addon-actions'
import Button from "../components/Button/index"
import {storiesOf} from "@storybook/react"


const defaultButton = () => {
    return <div style={{margin: 10}}>
        <Button onClick={action('click')}>default Button</Button>
    </div>
};
const buttonWithSize = () => {
  return <div style={{margin: 10}}>
      <div>
          <Button size="lg">lg Button</Button>
      </div>
     <div style={{marginTop: 10}}>
         <Button size="sm">sm Button</Button>
     </div>
  </div>
};
const buttonWithType = () => (
    <div style={{margin: 10}}>
        <div>
            <Button btnType="primary"> primary button </Button>
        </div>
        <div style={{marginTop: 10}}>
            <Button btnType="danger"> danger button </Button>
        </div>
        <div style={{marginTop: 10}}>
            <Button btnType="link" href="https://google.com"> link button </Button>
        </div>
    </div>
);
storiesOf('Button 组件', module)
    .add('Button', defaultButton)
    .add('不同尺寸 Button', buttonWithSize)
    .add("不同type Button", buttonWithType)
;
