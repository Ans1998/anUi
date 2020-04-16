import React from 'react';
import {library} from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'
import ButtonPage from './components/Button/Page'
import AlertPage from "./components/Alert/Page";
import MenuPage from "./components/Menu/Page";
import TabsPage from "./components/Tabs/page";
import Icon from "./components/Icon";
import TransitionPage from "./components/Transition/page";
library.add(fas);

function App() {
  return (
    <div>
        <div>动画</div>
        <div>
            <TransitionPage />
        </div>

        <div>icon展示</div>
        <div>
            <Icon icon="arrow-down" theme="primary" size="10x" />
        </div>

        <div>table展示</div>
        <div>
            <TabsPage />
        </div>

        <div>按钮展示</div>
        <div style={{margin: 10}}>
            <ButtonPage />
        </div>

        <div>alert弹框</div>
        <div style={{margin: 10}}>
            <AlertPage />
        </div>

        <div>Menu展示</div>
        <div style={{margin: 10}}>
           <MenuPage />
        </div>

    </div>
  );
}

export default App;
