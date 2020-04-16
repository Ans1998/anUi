import React from 'react';

import Button from '../Button/index'
import Transition from "./index";

class TransitionPage extends React.Component{
    state = {
        show: false
    };
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
                <div>
                    <Button size="lg" onClick={() => {
                        this.setState(
                            {
                                show: !this.state.show
                            }
                        )
                    }}>Toggle</Button>
                </div>
                <div>
                    <Transition in={this.state.show} timeout={300} animation="zoom-in-left">
                        <div>
                            <p>aaa----a-----a----a------a---a</p>
                            <p>aaa----a-----a----a------a---a</p>
                            <p>aaa----a-----a----a------a---a</p>
                            <p>aaa----a-----a----a------a---a</p>
                            <p>aaa----a-----a----a------a---a</p>
                        </div>
                    </Transition>
                    <Transition in={this.state.show} timeout={300} animation="zoom-in-left" wrapper>
                        <Button btnType="primary" size="lg">a lg button</Button>
                    </Transition>
                </div>
            </div>
        );
    }
}
export default TransitionPage;
