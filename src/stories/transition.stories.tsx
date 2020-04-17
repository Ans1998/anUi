import {storiesOf} from "@storybook/react"
import React, {useState} from 'react'
import Button from "../components/Button";
import Transition from "../components/Transition";
// import { action } from '@storybook/addon-actions'
import TransitionPage from "../components/Transition/page";
const component = () => (
    <TransitionPage />
);
storiesOf('动画 组件', module)
    .add('TransitionPage', component)
;
