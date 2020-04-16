import React, {Component} from 'react';

import Button from './index'
class ButtonPage extends Component{
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
                <div style={{margin: 10}}>
                    <Button disabled>hello</Button>
                    <div style={{marginTop: 10}}>
                        <Button>hello</Button>
                    </div>
                </div>
                <div style={{margin: 10}}>
                    <Button target="_blank" btnType="link" href="http://www.baidu.com" size="sm"> Small-link </Button>
                    <div style={{marginTop: 10}}>
                        <Button disabled btnType="link" href="http://www.baidu.com" size="sm"> Small-link </Button>
                    </div>
                </div>
                <div style={{margin: 10}}>
                    <div style={{marginTop: 10}}>
                        <Button btnType="primary" size="lg"> Primary-Large </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button btnType="primary" size="sm"> Primary-Small </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button disabled btnType="primary" size="sm"> Primary-disabled-Small </Button>
                    </div>
                </div>
                <div style={{margin: 10}}>
                    <div style={{marginTop: 10}}>
                        <Button btnType="danger" size="lg"> Danger-Large </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button btnType="danger" size="sm"> Danger-Small </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button disabled btnType="danger" size="sm"> Danger-disabled-Small </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ButtonPage;
