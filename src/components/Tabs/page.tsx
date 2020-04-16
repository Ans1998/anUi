import React, {Component} from 'react';

import Tabs from "./index";
import TabItem from "./item";

class TabsPage extends Component{
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
    }
}
export default TabsPage;
