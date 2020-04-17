import React, {Component} from 'react';

import Input from "./index";
import Icon from "../Icon";

class InputPage extends Component{
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
                <div>
                    <Input />
                </div>
                <div>
                    <Input size="lg" placeholder="测试输入" style={{width: 300}} />
                </div>
                <div>
                    <Input size="lg" placeholder="测试输入" />
                </div>
                <div>
                    <Input size="sm" style={{width: 300}}  placeholder="测试输入" onChange={
                        (e) => {
                            console.log(e.target.value);
                        }}/>
                </div>
                <div>
                    <Input style={{width: 300}} prepend="aaa"  placeholder="测试输入"/>
                </div>
                <div>
                    <Input style={{width: 300}} prepend={<Icon icon="times" />}  placeholder="测试输入"/>
                </div>
                <div>
                    <Input style={{width: 300}} append="aaa"  placeholder="测试输入"/>
                </div>
                <div>
                    <Input style={{width: 300}} append={<Icon icon="times" />}  placeholder="测试输入"/>
                </div>
            </div>
        );
    }
}
export default InputPage;
