import React, {Component} from 'react';

import Button, {ButtonSize, ButtonType} from './index'

class ButtonPage extends Component{
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
                <div style={{margin: 10}}>
                    <Button disabled>hello</Button>
                    <div style={{marginTop: 10}}>
                        <Button>hello</Button>
                    </div>
                </div>
                <div style={{margin: 10}}>
                    <Button target="_blank" btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Small}> Small-link </Button>
                    <div style={{marginTop: 10}}>
                        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Small}> Small-link </Button>
                    </div>
                </div>
                <div style={{margin: 10}}>
                    <div style={{marginTop: 10}}>
                        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Primary-Large </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Primary-Small </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Small}> Primary-disabled-Small </Button>
                    </div>
                </div>
                <div style={{margin: 10}}>
                    <div style={{marginTop: 10}}>
                        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Danger-Large </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Danger-Small </Button>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button disabled btnType={ButtonType.Danger} size={ButtonSize.Small}> Danger-disabled-Small </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ButtonPage;
