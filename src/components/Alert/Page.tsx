import React, {Component} from 'react';

import Alert from './index'

class AlertPage extends Component{
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
    }
}
export default AlertPage;
